import emailjs from "emailjs-com";
import { useRef } from "react";

import { H2, FormContainer, ContactContainer } from "./contact-info.styles";

import SocialIcons from "../social/social-icons.component";

const Conatct = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_itlgmci",
        "template_qbyiysb",
        form.current,
        "ZwOaVPL95r85PRFYt"
      )

      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <ContactContainer id="contact">
      <H2>
        <span>
          <i class="fa-solid fa-address-card"></i>
        </span>
        Contact
      </H2>
      <FormContainer>
        <form ref={form} onSubmit={sendEmail}>
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

export default Conatct;
