import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  NodeTypes,
  MiniMap,
} from "reactflow";
import "./Flow.scss";
import "reactflow/dist/base.css";
import Intro from "../Intro/Intro";
import Title from "../Title/Title";
import ProjectCard from "../ProjectCard/ProjectCard";
import initialNodes from "../../data/initialNodes";
import initialEdges from "../../data/initialEdges";
import Header from "../Header/Header";
const nodeTypes: NodeTypes = {
  Intro,
  Title,
  ProjectCard,
};

function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);
  return (
    <div className="page-wrapper">
      <Header />
      <main className="main">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          defaultViewport={{ x: 300, y: 200, zoom: 4 }}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}>
          <Background variant="lines" />
          <Controls />
          <MiniMap zoomable pannable />
        </ReactFlow>
      </main>
    </div>
  );
}

export default Flow;
