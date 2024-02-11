import { Edge } from "reactflow";
const initialEdges: Edge[] = [
  {
    id: "1-2",
    source: "intro",
    target: "projects",
    type: "step",
    sourceHandle: "bottom",
  },
  {
    id: "2-3",
    source: "projects",
    target: "studio",
    type: "step",
  },
  {
    id: "2-4",
    source: "projects",
    target: "4",
    type: "step",
  },
  {
    id: "intro-contact",
    source: "contact",
    target: "intro",
    type: "step",
  },
  {
    id: "intro-about",
    source: "about",
    target: "intro",
    type: "step",

    targetHandle: "intro-left",
  },
  {
    id: "about-about-me",
    source: "about-me",
    target: "about",
    type: "step",

    targetHandle: "intro-left",
  },
];

export default initialEdges;
