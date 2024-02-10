import "./Contact.scss";
import { NodeProps, Handle, Position } from "reactflow";

const Contact = ({ isConnectable }: NodeProps) => {
  return (
    <article className="contact">
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
      />
      <h2>contact me</h2>
      <form className="form">
        <label htmlFor="name" className="form__label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter name"
          className="form__input"
        />
        <label htmlFor="email" className="form__label">
          email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="form__input"
          placeholder="enter email"
        />
        <label htmlFor="message" className="form__label">
          message
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          className="form__textarea"
          placeholder="enter message"
        />
        <button type="submit" className="form__btn">
          send
        </button>
      </form>
    </article>
  );
};

export default Contact;
