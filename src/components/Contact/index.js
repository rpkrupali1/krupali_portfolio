import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

const Contact = () => {
  const formControlClass = {
    valid: "form-control",
    inValid: "form-control is-invalid",
  };

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    mesaage: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState();

  //const [className, setClassName] = useState(formControlClass.valid);

  const handleChange = (e) => {
    console.log(e.target.className);
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Your email is not valid");
        e.target.className = formControlClass.inValid;
      } else {
        setErrorMessage("");
        e.target.className = formControlClass.valid;
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
        e.target.className = formControlClass.inValid;
      } else {
        setErrorMessage("");
        e.target.className = formControlClass.valid;
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
      //setErrorMessage(`${e.target.name} is required.`);
    }
  };

  return (
    <div className="mb-3 row page-container">
      <div className="header-image col"></div>
      <div className="col-8">
        <div className="text-center my-2">
          <h2 className="fw-bold">Contact</h2>
        </div>
        <form className="mx-4" id="contact-form" onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="mb-2 form-group">
              <label htmlFor="name" className="mb-2">
                Name:
              </label>
              <input
                type="text"
                name="name"
                className={formControlClass.valid}
                defaultValue={name}
                onBlur={handleChange}
              />
            </div>
            <div className="mb-2 form-group">
              <label htmlFor="email" className="mb-2">
                Email address:
              </label>
              <input
                type="email"
                name="email"
                className={formControlClass.valid}
                defaultValue={email}
                onBlur={handleChange}
              />
            </div>
            <div className="mb-2 form-group">
              <label htmlFor="message" className="mb-2">
                Message:
              </label>
              <textarea
                name="message"
                rows="5"
                className={formControlClass.valid}
                defaultValue={message}
                onBlur={handleChange}
              />
            </div>
            {errorMessage && (
              <div>
                <p className="form-text mb-2">{errorMessage}</p>
              </div>
            )}
            <button type="submit" className="my-2 button h3 px-3 mx-auto">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="header-image col vh-100"></div>
    </div>
  );
};

export default Contact;
