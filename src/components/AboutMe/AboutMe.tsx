import useIsDark from "../../hooks/useIsDark";
import "./AboutMe.scss";
import { NodeProps, Handle, Position } from "reactflow";
const AboutMe = ({ isConnectable }: NodeProps) => {
  const isDark = useIsDark();
  return (
    <article className={`about-me ${isDark ? "about-me--dark" : ""}`}>
      <p className={`about-me__para ${isDark ? "about-me__para--dark" : ""}`}>
        I am recent graduate of BrainStation's Software Engineering bootcamp.
        I've acquired comprehensive skills in full-stack web development. My
        tech stack includes React, Typescript, Express and MySQL.
      </p>
      <p className={`about-me__para ${isDark ? "about-me__para--dark" : ""}`}>
        My educational background includes a BSc in physics from Imperial
        College London, where I cultivated the ability to confidently tackle
        complex mathematical problems.
      </p>
      <p className={`about-me__para ${isDark ? "about-me__para--dark" : ""}`}>
        Beyond the realm of technology, I am a self-taught independent musician,
        proficient in writing, producing, and distributing my music across major
        streaming platforms. I have had the opportunity to perform around london
        and collaborate with other artists of various different backgrounds.
      </p>
      <p className={`about-me__para ${isDark ? "about-me__para--dark" : ""}`}>
        My creative knowledge and experience facilitate in my approach to
        problem solving as it diversifies my perspective on a challenge.
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
