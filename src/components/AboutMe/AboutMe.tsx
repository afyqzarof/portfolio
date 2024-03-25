import useIsDark from "../../hooks/useIsDark";
import "./AboutMe.scss";
import { NodeProps, Handle, Position } from "reactflow";
const AboutMe = ({ isConnectable }: NodeProps) => {
  const isDark = useIsDark();
  return (
    <article className={`about-me ${isDark ? "about-me--dark" : ""}`}>
      <p className={`about-me__para ${isDark ? "about-me__para--dark" : ""}`}>
        I am a software engineer proficient in both creative expression and
        analytical problem-solving. I aspire to merge insights from the arts and
        sciences, to put forward tangible ideas and unique solutions.
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
