import React, { useState } from "react";
import "./Contact.scss";
import { NodeProps, Handle, Position } from "reactflow";
import emailjs from "@emailjs/browser";
import useIsDark from "../../hooks/useIsDark";

const Contact = ({ isConnectable }: NodeProps) => {
  const isDark = useIsDark();
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const [success, setSuccess] = useState(false);
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
  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormError()) {
      console.log("form not valid");
      return;
    }
    try {
      await emailjs.sendForm(serviceId, templateId, e.target, {
        publicKey,
      });
      setSuccess(true);
      setFormFields({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    } catch (error) {
      console.log(error);
      setFormErrors({
        ...formErrors,
        message: "failed to send message. please try again later",
      });
    }
  };
  return (
    <article className={`contact ${isDark ? "contact--dark" : ""}`}>
      <Handle
        type="source"
        position={Position.Right}
        id="a"
        isConnectable={isConnectable}
      />
      <h2 className={`contact__title ${isDark ? "contact__title--dark" : ""}`}>
        contact me
      </h2>
      <form className="form" onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className={`form __label ${isDark ? "form__label--dark" : ""}`}>
          name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter name"
          className={`form__input ${isDark ? "form__input--dark" : ""}`}
          onChange={handleChange}
          value={formFields.name}
        />
        {formErrors.name && <p className="form__error">{formErrors.name}</p>}
        <label
          htmlFor="email"
          className={`form __label ${isDark ? "form__label--dark" : ""}`}>
          email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className={`form__input ${isDark ? "form__input--dark" : ""}`}
          placeholder="enter email"
          onChange={handleChange}
          value={formFields.email}
        />
        {formErrors.email && <p className="form__error">{formErrors.email}</p>}
        <label
          htmlFor="message"
          className={`form __label ${isDark ? "form__label--dark" : ""}`}>
          message
        </label>
        <textarea
          name="message"
          id="message"
          className={`form__textarea ${isDark ? "form__textarea--dark" : ""}`}
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
        <button
          type="submit"
          className={`form__btn ${isDark ? "form__btn--dark" : ""} ${
            success ? "form__btn--success" : ""
          }`}>
          {success ? "sent" : "send"}
        </button>
      </form>
    </article>
  );
};

export default Contact;
