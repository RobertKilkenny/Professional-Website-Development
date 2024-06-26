import React, { useState, useEffect as useCallback } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { Separator } from "@/components/ui/separator";
import {
  ProjectDetailsParams,
  getProjectList,
  Status,
  State,
} from "./Custom functions/project-custom-types";
import { readJsonDate } from "./Custom functions/project-custom-types";
import NotFound from "./NotFound";
import DefaultPageSkeleton from "./loading-pages/DefaultPageSkeleton";
import ImageCarousel from "./ImageCarousel";

const ProjectDetails: React.FC = () => {
  const { id } = useParams<ProjectDetailsParams>();
  const [state, setState] = useState<State>({
    status: Status.Loading,
  });
  const [isCycling, setIsCycling] = useState(false);

  // Handle loading the slug page and setting what details to show!
  useCallback(() => {
    const fetchData = async () => {
      const projects = await getProjectList();
      try {
        const projectData = projects.find((item) => item.extension === id);
        // If there is an error that has already been logged (state.status is error) OR
        // If the page has already loaded the correct project end this early!
        if (
          (!projectData && state.status == Status.Error) ||
          (state.status == Status.Loaded &&
            projectData &&
            state.project.id == projectData.id)
        )
          return;

        // If the data for the project is in the JSON file "project.json"
        if (projectData) {
          const fileLocation = "/data/"
            .concat(projectData.folder_name)
            .concat("/content.md");

          const response = await fetch(fileLocation);
          // If the data cannot be fetched, throw an error (odds are fileDirectory does not exist)
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }

          // Grab the data from the markdown file to parse later
          const content = await response.text();
          setState({
            status: Status.Loaded,
            project: projectData,
            content: content,
            ShouldCycleImages: projectData.cycling_images.length != 0,
          });
          console.log("Loaded data");
        } else {
          throw new Error("Page does not exist!");
        }
      } catch (error: unknown) {
        if (error instanceof Error) {
          setState({
            status: Status.Error,
            errorCode: error.message,
          });
        } else {
          throw new Error("Something went HORRIBLY wrong.");
        }
      }
    };
    fetchData().catch((error) => {
      setState({
        status: Status.Error,
        errorCode: error,
      });
    });
  }, [state, id]);

  // Send the event out to start the cycling image function
  if (!isCycling && state.status == Status.Loaded && state.ShouldCycleImages) {
    const event = new Event("cycleImage");
    window.dispatchEvent(event);
    setIsCycling(true);
  }

  // Display Webpage details
  switch (state.status) {
    case Status.Loaded:
      return (
        <div className="page-content-holder">
          <h1>{state.project.name}</h1>
          <h2>
            Started {readJsonDate(state.project.start_time)}
            {state.project.ongoing ||
            typeof state.project.end_time == "undefined"
              ? ""
              : " and ended ".concat(readJsonDate(state.project.end_time))}
          </h2>
          <Separator className="mb-5" />
          {state.ShouldCycleImages && state.project.cycling_images && (
            <ImageCarousel
              rootDir={state.project.folder_name}
              imagesToCycle={state.project.cycling_images}
            />
          )}

          <div className="main-content-holder">
            {state.project.github_link && (
              <h3 className="mt-5">
                <a href={state.project.github_link}>
                  GitHub Repository can be found here!
                </a>
              </h3>
            )}

            <ReactMarkdown
              components={{
                h1: "h2",
                h2: "h3",
              }}
              className="mt-5"
            >
              {state.content}
            </ReactMarkdown>
          </div>
        </div>
      );

    case Status.Loading:
      return <DefaultPageSkeleton />;

    default:
      console.log(state.errorCode);
      return <NotFound />;
  }
};

export default ProjectDetails;
