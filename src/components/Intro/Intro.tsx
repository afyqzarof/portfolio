import "./Intro.scss";
import { Handle, NodeProps, Position } from "reactflow";
import headShot from "../../assets/images/afyq-zarof-headshot.jpg";
import { TypeAnimation } from "react-type-animation";

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
        <p className="intro__description">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "FullStack Developer",
              2000,
              "Independent Music Producer",
              1000,
              "Software Engineer",
              2000,
              "Frontend Developer",
              2000,
              "Independent Singer/Songwriter",
              1000,
              "Backend Developer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>
        <p>thanks for coming to my website!</p>
      </div>
      <Handle type="target" position={Position.Left} id="intro-left" />
      <Handle type="source" position={Position.Right} id="intro-right" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="bottom"
        isConnectable={isConnectable}
      />
    </article>
  );
};

export default Intro;
