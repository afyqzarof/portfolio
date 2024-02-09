import "./Title.scss";
import { Handle, Position, NodeProps } from "reactflow";

type TitleData = {
  title: string;
};
const Title = ({ data }: NodeProps<TitleData>) => {
  return (
    <article className="title">
      <Handle position={Position.Left} type="target" />
      <p>{data.title}</p>
      <Handle position={Position.Right} type="source" />
    </article>
  );
};

export default Title;
