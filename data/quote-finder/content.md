# Background

This project was for my data structures and algorithm class with the goal being to find a dataset and implement two different data structures to help create an application to access this data. We found a large CSV of quotes with categories and the person attributed to them, so we saw this as a great dataset. We decided to use a map and a B+ tree to implement the different types of searching we wanted to do. The idea for both data structures was to hold arrays to the quotes by the key the user wanted to search for.

# Setting Up the Dataset

One problem we quickly ran into was that our data was not optimized for what we wanted. I had noticed there were several "categories" that existed within the dataset that would only appear a few times, so we decided to clean out the data and remove a lot of the useless data. This was my first task as I was the one assigned to most of the backend work. I wrote a simple cleaning algorithm that would compile all of the categories with the number of times that they appeared, and then alter the CSV file to remove them from the dataset. The idea behind this was that cleaning the data once would be much more efficient, as requiring the application to clean the data (or ignore specific categories) is just not worth it. The only reason we would want this to be handled by the application would be if we were to allow the user to decide what should be cleaned out and this was not an intended feature nor did we see it as a valuable addition.

# Creating the Application

After creating the algorithm and unit testing it to ensure I was not losing data we wanted to keep, I went on to develop the backend for the application. At this point, most of the frontend resources and functionality were working, so I just had to work with Dany to make sure that it would connect seamlessly to the frontend work. We decided on a very simple request and receive system, where the C++ code would act like a proper database. When the application was opened, the Java code would run the C++ backend which compiled the data structures and then would wait for a request to come through. The backend would compile a list of valid keys that the user could use to generate quotes, which the frontend would use to make a list for the user to choose from. Once a valid key was chosen, a request would be generated for the backend to process. Specifically, the backend would send back the array of all quotes within that key and this would allow for the frontend to iterate through all of the quotes with only 1 request. Due to time constraints and limited knowledge of implementing a C++ file as a library for Java, we chose to create this database system via a series of explicitly labeled .txt files which would simulate requests and responses. This required me to be in constant communication with Dany as discussing how we were programming our sides of the code to read and send data would expedite how much of the data we had to fix.
Overall, the hardest part of this part was creating a B+ tree for this project. Using a map for one of the data structures meant that I only had to make one structure personally. Since I was the only person working on the backend, this was necessary as I did not have the resources to create two data structures from scratch. We chose a B+ Tree because while we had discussed it in class, it was a data structure we never really implemented in the coursework. This allowed us to explore a new structure while having the time to accomplish the other parts of the project (like the report and finding the assets for the application).
Like my other class projects, if you want to see the source code or the document showing all of our contributions to the project, I would implore you to check out the GitHub repository [here](https://github.com/dannirash/Quote-Finder).