import "./Links.scss";
import { Handle, Position } from "reactflow";
import github from "../../assets/images/github-mark.svg";
import githubDark from "../../assets/images/github-mark-dark.svg";
import linkedin from "../../assets/images/linkedin.png";
import linkedinDark from "../../assets/images/linkedin-app-white-icon.svg";
import useIsDark from "../../hooks/useIsDark";

const Links = () => {
  const isDark = useIsDark();
  return (
    <article className={`links ${isDark ? "links--dark" : ""}`}>
      <a href="https://github.com/afyqzarof" rel="noopener" target="_blank">
        <img
          src={isDark ? githubDark : github}
          alt="github"
          className="links__logo links__logo--left"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/afyq-zarof/"
        rel="noopener"
        target="_blank">
        <img
          src={isDark ? linkedinDark : linkedin}
          alt="linkedin"
          className="links__logo"
        />
      </a>
      <Handle type="target" position={Position.Left} id="links" />
    </article>
  );
};

export default Links;
