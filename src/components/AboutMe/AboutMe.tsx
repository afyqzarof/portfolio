import "./AboutMe.scss";
import { NodeProps, Handle, Position } from "reactflow";
const AboutMe = ({ isConnectable }: NodeProps) => {
  return (
    <article className="about-me">
      <p className="about-me__para">
        I am recent graduate of BrainStation's Software Engineering bootcamp.
        I've acquired comprehensive skills in full-stack web development. My
        tech stack includes React, Typescript, Express and MySQL.
      </p>
      <p className="about-me__para">
        My educational background includes a BSc in physics from Imperial
        College London, where I cultivated the ability to confidently tackle
        complex mathematical problems.
      </p>
      <p className="about-me__para">
        Beyond the realm of technology, I am a self-taught independent musician,
        proficient in writing, producing, and distributing my music across major
        streaming platforms. Successfully balancing these dual passions is a
        testament to my effective time management skills.
      </p>
      <Handle
        position={Position.Left}
        type="source"
        isConnectable={isConnectable}
      />
    </article>
  );
};

export default AboutMe;
