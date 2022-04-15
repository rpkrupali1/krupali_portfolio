import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <div className="container">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="text" name="email" />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
