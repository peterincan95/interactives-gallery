
> [*In Defense of the Detour: On Craft, A.I. and what gets lost when we skip the slow part*](https://www.nytimes.com/interactive/2026/09/27/opinion/ai-art-creativity.html)

## What is this project?

For the month of November, I decided I wanted to do an exploration of AI-assisted cartography for the web. After seeing some of the work my friends and colleagues have done and watching my Instagram feed fill up with increasingly impressive maps and visualizations, I decided it was time to temper my anxiety and see what this strange new world has to offer. I've used AI tools in my work for a while but mostly limited to writing Python scripts for processing data.

For this project, I decided to take a series of maps and datasets that I've worked with in the past and turn them into interactive published web apps that would allow users to explore the data in a curated way.

My goal was to see if I could use these tools in a careful and responsible way to make things that I still felt a sense of creative ownership over. I really like Giorgia Lupi's piece [*In Defense of the Detour: On Craft, A.I. and what gets lost when we skip the slow part*](https://www.nytimes.com/interactive/2026/09/27/opinion/ai-art-creativity.html), and I wanted to see if I could incorate AI into a workflow while still maintaining the slow, playful iteration that makes the creative process so enjoyable for me.

I'm still mulling over what I've learned and where I'm going to take things from here, but briefely, here are the things that I've learned.

## What tools did you use?

Claude Code using the Opus 5.5 model was my primary AI coding tool for this project. I also used ArcGIS Pro and Online to prototype maps, and Figma to sketch out UI mockups.

## What did you learn?

- **Where does your sense of Authorship lie?:** To me this is the key question. I want to feel like I have made a thing, not guided another entity as it makes a thing for me. There were a couple of projects that I started where I found myself slowly slipping from the role of a designer to the role of a director. In those cases I found myself almost instantly losing interest in the project. For the successful projects, I found the parts of the process where I wanted to keep control over the design and tried to keep an iron grip over it.
- **Keep a tight, short iteration loop:** The idea of "one-shotting" a finished application has very little appeal for me. I found it easiest to maintain control of the finished product if I implemented features one at a time and made sure to leave room to test and experiment in between prompts.
- **A promting-only workflow ain't it:** When it came time to dialing in choices like symbology, colour, typography, and layout, the back and forth prompting felt inefficient and exhausting. "let's try this hex code", "make the point symbols 10px bigger". I found a few alternatives that worked better for me. Instructing the AI to create a config file where all the parameters I wanted to be able to tweak were exposed and neatly organized. Creating helper apps for things like setting up color schemes. Mocking up designs in Figma and supplying the AI with screenshots all worked pretty well.
- **Leave room to breathe**: It's really easy to fall down the rabbit hole of "just one more feature". It was important to take some time to test out each iteration, and sometimes leave a project to rest for a few days, then come back to it with fresh eyes.
- **The siren's call is strong:** The idea that any idea for a project that I have can become real in a matter of hours is frighteningly intoxicating. I don't know what this means yet.


## Wait, who are you again?

Hi! I'm Peter. I'm a designer with the Creative Lab at Esri. I make maps. I usually post most of my work [here](https://peteratwoodprojects.wordpress.com/), or [here](https://www.linkedin.com/in/peter-atwood-60b9ba18a/).

-Peter Atwood, Nov 2026

