import "./ProjectCard.scss";
import { Handle, Position, NodeProps } from "reactflow";

type Link = {
  name: string;
  url: string;
};
const ProjectCard = ({ data }: NodeProps) => {
  return (
    <article className="project">
      <Handle type="target" position={Position.Top} />
      <div className="project__title-wrapper">
        <img src={data.imgSrc} alt="studio logo" className="project__img" />
        <h3>{data.name}</h3>
      </div>
      <p className="project__description">{data.description}</p>
      {data.links?.map((link: Link) => (
        <a href={link.url} rel="noopener" target="_blank">
          {link.name}
        </a>
      ))}
    </article>
  );
};

export default ProjectCard;
