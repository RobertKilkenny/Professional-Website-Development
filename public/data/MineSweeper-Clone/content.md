# Background

This project was the final coding project for my Programming Fundamentals 2 class. The game was made in C++ using the [Simple and Fast Multimedia Library (SFML)](https://www.sfml-dev.org/). To get the application to run, we had to create a list for CMake to compile the code into an executable to run. This project tested my ability to understand the deliverables in the instructions and make the work for a game. Unlike regular code, a game is much harder to unit test as many of the deliverables requested were about how the game would feel and interact with the user. While it would be possible to write a script for this, it was much simpler to get to understand what was expected and use that to compile a series of tests I could perform quickly upon each iteration of the game.

# Developing the Game

Creating this game could be broken down into two different sections, working with the SFML library and then iterating on the game features. Once I had SFML creating a window that would recognize inputs and the mouse's location within the window's area, developing each part of the game was rather simple so the challenge, as described before, was creating the features with all of the requirements in mind.

## Creating a SFML Application

This was the hardest part of the project for me because initially I was mostly just coding by myself trying to create the game with SFML, and googling individual features as I thought about using them. To make that long story bearable to read, it led to me making a completely unplayable game with latency measured in seconds and generally unplayable. After that total failure to launch, I learned two valuable lessons to always take the time to learn about a library through a smaller, guided project and when to just delete hours of work instead of trying to make badly made code work. By taking these ideas to heart (and taking a break from the project to cool down), I was able to quickly understand how to implement the library to make a playable game and even fix a few bugs by running the app within Visual Studio, which was a nice surprise. I have always had a bad habit of trying to create too many systems at once, which was especially disastrous in this project and was a lesson I had to apply again when creating this website, so I am glad I had this experience because it has helped me recognize how problematic that way of working can be when also learning a lot of new systems.

## Iterating on Game Features

The best resource for creating the game features was studying the game in advance and thoroughly reading the rubric. By studying, I mostly mean playing the original version of Minesweeper so I could test it effectively and watching the videos supplied by the professor. The videos especially were nice, since I could watch them passively while taking a break from coding but still making progress. It gave me the time I needed to create the simple system on paper that I would end up using to create the board for the game. I would create a board tile class, a random class to aid in creating a board, and a Texture Manager to implement SMFL. The actual board was a 2D array of pointers to the board tiles generated, which could be overwritten for the three default boards that we had to make for testing. For this project, I passed most of the data in as pointers to help with the performance of the program (although if I were to remake this, I would use references when I could simplify some of the code), to ensure that the user would not have an observable delay between clicking a tile and seeing the result. Making the game this way helped me create a lot of the features quickly, and even allowed me to have my printout of the board in the terminal, which was very helpful before I created the functionality for the debug button (which I made pretty late in development for some unknown reason).

# Reflection

While this was not the hardest project I had done in the class, this was my favorite of the group because it was a lot more challenging conceptually. Making a game is a lot more than processing data, and to get a game to feel right it has to be efficient so it does not lag and well designed so that it is responsible for user input. I was proud of all of the progress that I made with the project, as I mostly made the features in a 48-hour window due to personal time constraints and struggling initially with the SFML library. Within this window, I went from the [tutorial application](https://www.sfml-dev.org/tutorials/2.6/) on the SFML website to creating the entire game minus one small feature that I missed in the instructions (having all flags appear when the game is completed if the user wins without all flags placed). That small mistake, while very frustrating, I like to see it as a learning experience as it was a simple mistake that didn't hurt my grade in my class while being the type of mistake I can't forget (mostly because of how frustrated I was that I made such a small mistake which kept me from a 100% for the project).

Working in SFML was the first experience I had in a "game engine" which would inspire me to start creating games as a hobby. It had felt unapproachable before this but after making a complete (if not original) game in a month, I gained a lot more confidence to work on my projects on the side. While I was not ready to publish a game on Steam, I had the baseline and confidence to work towards that as a goal.

# Final Notes

I would create a GitHub repository for this project, but I am not sure if I have the right to do so. The assets were given by my teacher for the project and it is not explicitly clear if I have the liberty to post it, even if it is just to store the work externally to let others view it. Also, I am not sure if the people who made Minesweeper would appreciate it either, so for now it will be only saved on my local machine. However, there are several examples of similar projects that people have done, so there are likely resources out there to replicate it.