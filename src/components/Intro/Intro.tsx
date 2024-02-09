import "./Intro.scss";
import { Handle, Position } from "reactflow";
import headShot from "../../assets/images/afyq-zarof-headshot.jpg";

const Intro = ({ isConnectable }) => {
  return (
    <article className="intro">
      <img src={headShot} alt="professional head shot" className="intro__img" />
      <div>
        <h1>Hello, I'm Afyq</h1>
        <p>I am a FullStack Developer</p>
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
