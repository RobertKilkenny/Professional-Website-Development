import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

interface Class {
  id: "";
  name: "";
  description: "";
  tags: [];
}

async function getClassList() {
  const result = await fetch("/data/classes.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const json = await result.json();
  return json["classes"];
}

function About() {
  const [data, setData] = useState<Class[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getClassList();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* All css attributes from index.css  */}
      <div className="page-content-holder">
        <h1>About Me</h1>
        <Separator />
        <div className="main-content-holder">
          <h2>My Story</h2>
          <p>
            Hi, I am Robert Kilkenny, currently a student at the University of
            Florida (UF) going into my senior year. I plan to graduate in
            December of 2024 with a Bachelor's Degree in Computer Science and a
            minor in Mathematics.
          </p>
          <p>
            I run a club at UF about creating video games called "DevLUp" to
            help students learn about coding principles like using GitHub,
            Object Oriented Programming, and debugging methods. I became
            president of DevLUp at UF because I wanted to inspire more computer
            science students to work on projects that they are having fun doing,
            and creating a game with Unity or Unreal can offer a lot to students
            and improve their coding skills and literacy!
          </p>
          <p>
            My experiences running a club and working in different fields have
            taught me a lot about working as a team member and as a leader.
            Throughout my early career as a software engineer, I have worked
            with several different coding languages and code stacks, from
            developing games to creating this website that you are currently
            using! I have these projects detailed on my Project List page and
            feel free to reach out to me!
          </p>
          <div className="object-container-horizon">
            <Link to="/projects" className="flex justify-center">
              <Button>Project List</Button>
            </Link>
            <Link to="/project/website" className="flex justify-center">
              <Button>Website Project Page</Button>
            </Link>
            <Link to="/contact-me" className="flex justify-center">
              <Button>Contact Me</Button>
            </Link>
          </div>
          <Separator className="mt-10 mb-10 bg-foreground" />
          <h2>Classes I've Taken</h2>
          <p className="main-content-text">
            A short list of classes I've taken that have improved me as a
            software developer.
          </p>
          <div className="object-container-grid space-x-5">
            {data.map((Class) => (
              <Card key={Class.id} className="grid-cell">
                <CardTitle className="pb-5">
                  {Class.name}
                </CardTitle>
                <Separator className="bg-card-foreground" />
                <CardContent className="hidden-grid-content">
                  <p className="main-content-text">{Class.description}</p>
                </CardContent>
                <CardFooter>
                  <p className="main-content-text pt-5">
                    <strong>Skills Learned:</strong> {Class.tags.join(", ")}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
