import emailjs from "emailjs-com";
import { useRef } from "react";

import { H2, FormContainer, ContactContainer } from "./contact-info.styles";

import SocialIcons from "../social/social-icons.component";


const Contact = () => {
  return (
    <ContactContainer id="contact">
      <H2>
        <span>
          <i class="fa-solid fa-address-card"></i>
        </span>
        Contact
      </H2>
      <FormContainer>
        <form >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="name input"
            autoComplete="off"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="email input"
            autoComplete="off"
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Your Message"
            name="message"
            className="message"
            autoComplete="off"
          ></textarea>
          <input type="submit" value="Send Message" className="button" />
        </form>
        <div>
          <SocialIcons />
        </div>
      </FormContainer>
    </ContactContainer>
  );
};

export default Contact;
