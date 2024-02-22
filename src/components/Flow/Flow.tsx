import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  NodeTypes,
  MiniMap,
  BackgroundVariant,
} from "reactflow";
import "./Flow.scss";
import "reactflow/dist/base.css";
import Intro from "../Intro/Intro";
import Title from "../Title/Title";
import ProjectCard from "../ProjectCard/ProjectCard";
import initialNodes from "../../data/initialNodes";
import initialEdges from "../../data/initialEdges";
import Header from "../Header/Header";
import Contact from "../Contact/Contact";
import AboutMe from "../AboutMe/AboutMe";
import Links from "../Links/Links";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import useIsDark from "../../hooks/useIsDark";
const nodeTypes: NodeTypes = {
  Intro,
  Title,
  ProjectCard,
  Contact,
  AboutMe,
  Links,
};

function Flow() {
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, _setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const screenWidth = window.innerWidth;
  const mobile = (): boolean => {
    return screenWidth <= 480;
  };
  const isDark = useIsDark();
  // console.log(isDark);

  return (
    <div className="page-wrapper">
      <Header />
      <DarkModeBtn />
      <main className="main">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          defaultViewport={
            mobile()
              ? { x: 30, y: 200, zoom: 0.9 }
              : { x: 300, y: 200, zoom: 4 }
          }
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
          deleteKeyCode={null}
          panOnScroll>
          <Background
            id="2"
            variant={BackgroundVariant.Dots}
            className={isDark ? "background background--dark" : "background"}
            color={isDark ? "#eee" : "#aaa"}
            gap={100}
            size={4}
          />
          <Controls />
          <MiniMap
            zoomable
            pannable
            className={`minimap ${isDark ? "minimap--dark" : ""}`}
          />
        </ReactFlow>
      </main>
    </div>
  );
}

export default Flow;
