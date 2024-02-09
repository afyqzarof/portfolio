import ReactFlow, {
  Controls,
  Background,
  Node,
  useNodesState,
  useEdgesState,
} from "reactflow";
import "./Flow.scss";
import "reactflow/dist/base.css";

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "to the",
    type: "step",
  },
];

const initialNodes: Node[] = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
    type: "input",
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 100, y: 100 },
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
        onEdgesChange={onEdgesChange}>
        <Background variant="lines" />
        <Controls />
      </ReactFlow>
    </main>
  );
}

export default Flow;
