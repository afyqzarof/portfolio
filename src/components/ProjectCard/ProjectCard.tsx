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
        <h3 className="project__title">{data.name}</h3>
      </div>
      <p className="project__description">{data.description}</p>
      {data.name === "studio" && (
        <iframe
          className="project__video"
          src="https://www.youtube.com/embed/Zglq145sEw0?si=DShmAiViJKtzHSGB"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      )}
      {data.links?.map((link: Link, index: number) => (
        <a
          href={link.url}
          rel="noopener"
          target="_blank"
          key={index}
          className={
            link.name === "website"
              ? "project__link project__link--cta"
              : "project__link"
          }>
          {link.name}
        </a>
      ))}
    </article>
  );
};

export default ProjectCard;
