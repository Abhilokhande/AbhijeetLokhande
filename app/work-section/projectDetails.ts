export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Open Throttle's",
    description:
      "Experience seamless bike browsing, detailed model insights, and effortless showroom connections",
    technologies: ["MERN","Bootstarp"],
    github: "https://github.com/Abhilokhande/Open-Throttle",
    demo: " ",
    image: require(".//../../public/projects/open-throttle3.png"),
    available: true,
  },
  {
    id: 1,
    name: "MoneyMate",
    description:
      "Your ultimate financial companion, seamlessly blending technology and expertise for effortless financial management.Experience the future of finance today!",
    technologies: ["JAVA(JSp)", "HTML", "CSS"],
    github: "https://github.com/Abhilokhande/Online-Banking",
    demo: "",
    image: require(".//../../public/projects/moneymate1.png"),
    available: true,
  },
  {
    id: 2,
    name: "PathPuzzle",
    description:
     "PathPuzzle: A MERN stack project utilizing the A* algorithm to find the shortest path. With its CSS-crafted block design, it offers an immersive gaming experience. Challenge yourself to navigate through mazes and puzzles, blending entertainment with algorithmic complexity.",
    technologies: ["React", "CSS", "Node.Js"],
    github: "https://github.com/Abhilokhande/Case-Study",
    demo: "2",
    image: require(".//../../public/projects/path.png"),
    available: true,
  },
  {
    id: 3,
    name: "Agronomix",
    description:
      "This project harnesses the power of data science and Flask to create an interactive web application that provides valuable insights and analysis.",
    technologies: ["PYTHON (Flask)", "HTML", "CSS"],
    github: "https://github.com/Abhilokhande/Online-Banking",
    demo: "",
    image: require(".//../../public/projects/py3.png"),
    available: true,
  },
  {
    id: 4,
    name: "RhythmicNodes",
    description:
     "RhythmicNodes: A console music player demonstrating linked list power. Weaving melodies through nodes, it offers dynamic playback, blending tech and music seamlessly.",
    technologies: ["C++", "Data Structure"],
    github: "https://github.com/Abhilokhande/DCLL-music-player....",
    demo: "",
    image: require(".//../../public/projects/rhythmicnode.png"),
    available: true,
  },
  
];

// export const designProjects = [
//   {
//     id: 1,
//     name: "Hebron Statup Lab Website",
//     description:
//       "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 2,
//     name: "RAGS Scrubs Website",
//     description:
//       "An image generator website that allows users to generate, combine, and download images.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
//     available: false,
    
//   },
//   {
//     id: 3,
//     name: "Crown Branding Agency Website",
//     description:
//       "A website that reduces the length of your URL using Bit.ly's API",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image:
//       "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
//     available: false,
//   },
//   {
//     id: 4,
//     name: "Titi Mobile App",
//     description:
//       "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
//     technologies: ["UX Research", "UI Design", "Prototyping"],
//     github: "",
//     demo: "",
//     image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
//     available: false,
//   },
// ];
