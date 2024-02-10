import "./Intro.scss";
import { Handle, NodeProps, Position } from "reactflow";
import headShot from "../../assets/images/afyq-zarof-headshot.jpg";

const Intro = ({ isConnectable }: NodeProps) => {
  return (
    <article className="intro">
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        isConnectable={isConnectable}
      />
      <img src={headShot} alt="professional head shot" className="intro__img" />
      <div>
        <h1>Hello, I'm Afyq</h1>
        <p className="intro__description">I am a FullStack Developer</p>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={isConnectable}
      />
    </article>
  );
};

export default Intro;
