import "./AboutMe.scss";
import { NodeProps, Handle, Position } from "reactflow";
const AboutMe = ({ isConnectable }: NodeProps) => {
  return (
    <article className="about-me">
      <p>
        As an Imperial College London physics graduate, I've applied Python's
        machine learning in celestial analysis and tackled intricate CERN data.
        Simultaneously, my passion for music led me to independently produce an
        album and direct music videos, nurturing a blend of creativity and
        technical skills. Now, driven by a desire to merge analytical prowess,
        coding finesse, and creative insights, I'm pivoting into software
        engineering for an innovative journey ahead.
      </p>
      <Handle
        position={Position.Right}
        type="source"
        isConnectable={isConnectable}
      />
    </article>
  );
};

export default AboutMe;
