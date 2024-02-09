import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  NodeTypes,
} from "reactflow";
import "./Flow.scss";
import "reactflow/dist/base.css";
import Intro from "../Intro/Intro";
import Title from "../Title/Title";
import ProjectCard from "../ProjectCard/ProjectCard";
import initialNodes from "../../data/initialNodes";
import initialEdges from "../../data/initialEdges";
const nodeTypes: NodeTypes = {
  Intro,
  Title,
  ProjectCard,
};

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
