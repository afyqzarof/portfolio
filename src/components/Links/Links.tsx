import "./Links.scss";
import { Handle, Position } from "reactflow";
import github from "../../assets/images/github-mark.svg";
import linkedin from "../../assets/images/linkedin.png";

const Links = () => {
  return (
    <article className="links">
      <a href="https://github.com/afyqzarof" rel="noopener" target="_blank">
        <img
          src={github}
          alt="github"
          className="links__logo links__logo--left"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/afyq-zarof/"
        rel="noopener"
        target="_blank">
        <img src={linkedin} alt="linkedin" className="links__logo" />
      </a>
      <Handle type="target" position={Position.Left} id="links" />
    </article>
  );
};

export default Links;
