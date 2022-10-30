import React from "react";
import "./Contactforn.style.css";

export const ContactForm = () => {
  return (
    <section id="contact-form">
      <form>
        <h2>Fill out the form and we will select a dress for you</h2>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label className="email">Email</label>
          <input type="email" />
        </div>

        <button type="submit">contact me</button>
      </form>
    </section>
  );
};
