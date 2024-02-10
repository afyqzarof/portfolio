import { Edge } from "reactflow";
const initialEdges: Edge[] = [
  {
    id: "1-2",
    source: "intro",
    target: "projects",
    type: "step",
    animated: true,
    sourceHandle: "bottom",
  },
  {
    id: "2-3",
    source: "projects",
    target: "studio",
    type: "step",
    animated: true,
  },
  {
    id: "2-4",
    source: "projects",
    target: "4",
    type: "step",
    animated: true,
  },
  {
    id: "intro-contact",
    source: "contact",
    target: "intro",
    type: "step",
    animated: true,
  },
  {
    id: "intro-about",
    source: "about",
    target: "intro",
    type: "step",
    animated: true,
    targetHandle: "intro-left",
  },
];

export default initialEdges;
