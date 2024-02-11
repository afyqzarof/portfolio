import React, { useState } from "react";
import "./Contact.scss";
import { NodeProps, Handle, Position } from "reactflow";

const Contact = ({ isConnectable }: NodeProps) => {
  const maxChar = 250;
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isFormError = () => {
    setFormErrors({
      name: !formFields.name ? "this field is  required" : "",
      email: !formFields.email ? "this field is  required" : "",
      message: !formFields.message ? "this field is  required" : "",
    });
    if (
      !!formFields.email &&
      !formFields.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    ) {
      setFormErrors({
        ...formErrors,
        email: "please enter a valid email address",
      });
      return false;
    }
    if (!!formFields.name && !!formFields.email && !!formFields.message) {
      return true;
    }
    return false;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.name !== "message" || formFields.message.length < maxChar) {
      setFormFields({
        ...formFields,
        [e.target.name]: e.target.value,
      });
      setFormErrors({
        ...formErrors,
        [e.target.name]: "",
      });
    }
  };
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormError()) {
      console.log("form not valid");
      return;
    }
    console.log(formFields);
  };
  return (
    <article className="contact">
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
      />
      <h2>contact me</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form__label">
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter name"
          className="form__input"
          onChange={handleChange}
        />
        {formErrors.name && <p className="form__error">{formErrors.name}</p>}
        <label htmlFor="email" className="form__label">
          email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="form__input"
          placeholder="enter email"
          onChange={handleChange}
        />
        {formErrors.email && <p className="form__error">{formErrors.email}</p>}
        <label htmlFor="message" className="form__label">
          message
        </label>
        <textarea
          name="message"
          id="message"
          className="form__textarea"
          placeholder="how can i help?"
          onChange={handleChange}
          value={formFields.message}
        />
        <div className="form__count-wrapper">
          {formErrors.message && (
            <p className="form__error">{formErrors.message}</p>
          )}
          <p className="form__count">
            {formFields.message.length}/{maxChar}
          </p>
        </div>
        <button type="submit" className="form__btn">
          send
        </button>
      </form>
    </article>
  );
};

export default Contact;
