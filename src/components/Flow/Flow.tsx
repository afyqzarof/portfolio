import ReactFlow, {
  Controls,
  Background,
  Node,
  useNodesState,
  useEdgesState,
  NodeTypes,
} from "reactflow";
import "./Flow.scss";
import "reactflow/dist/base.css";
import Intro from "../Intro/Intro";
const nodeTypes: NodeTypes = {
  Intro,
};

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "my projects",
    type: "step",
    animated: true,
  },
  {
    id: "2-3",
    source: "2",
    target: "3",
    label: "next",
    type: "step",
    animated: true,
  },
  {
    id: "2-4",
    source: "2",
    target: "4",
    label: "next",
    type: "step",
    animated: true,
  },
];

const initialNodes: Node[] = [
  {
    id: "1",
    data: {},
    position: { x: 0, y: 0 },
    type: "Intro",
  },
  {
    id: "2",
    data: { label: "Projects" },
    position: { x: 400, y: 400 },
  },
  {
    id: "3",
    data: { label: "next one" },
    position: { x: 300, y: 600 },
  },
  {
    id: "4",
    data: { label: "next one one" },
    position: { x: 600, y: 600 },
  },
];

function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);
  return (
    <main className="main">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}>
        <Background variant="lines" />
        <Controls />
      </ReactFlow>
    </main>
  );
}

export default Flow;
