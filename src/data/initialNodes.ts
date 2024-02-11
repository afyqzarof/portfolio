import { Node } from "reactflow";

const initialNodes: Node[] = [
  {
    id: "intro",
    data: {},
    position: { x: 0, y: 0 },
    type: "Intro",
  },
  {
    id: "projects",
    data: { title: "my projects" },
    position: { x: 250, y: 300 },
    type: "Title",
  },
  {
    id: "studio",
    data: {
      name: "studio",
      imgSrc: "/src/assets/images/studio-flavicon.svg",
      description:
        "An all-in-one platform for creative project processes and idea articulation",
      links: [
        {
          name: "website",
          url: "https://ideation-studio.dev",
        },
        {
          name: "front-end github",
          url: "https://github.com/afyqzarof/studio-client",
        },
        {
          name: "back-end github",
          url: "https://github.com/afyqzarof/studio-server",
        },
      ],
    },
    position: { x: 450, y: 500 },
    type: "ProjectCard",
  },
  {
    id: "4",
    data: {
      name: "debug_ducky",
      imgSrc: "/src/assets/images/duck-logo.svg",
      description:
        "A website to help individuals learn to code that is inspired by the rubber duck method",
      links: [
        {
          name: "website",
          url: "https://debug-ducky.bochynski-ng.com",
        },
        {
          name: "github",
          url: "https://github.com/afyqzarof/hackathon-debug-ducky",
        },
      ],
    },
    position: { x: 1200, y: 500 },
    type: "ProjectCard",
  },
  {
    id: "contact",
    data: {},
    position: { x: -500, y: -500 },
    type: "Contact",
  },
  {
    id: "about",
    data: { title: "about me" },
    position: { x: -700, y: 700 },
    type: "Title",
  },
  {
    id: "about-me",
    data: {},
    position: { x: -750, y: 800 },
    type: "AboutMe",
  },
];

export default initialNodes;
