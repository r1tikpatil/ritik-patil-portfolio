import {
  NavContainer,
  NavLinks,
  NavLink,
  MenuDiv,
  Cross,
} from "./navigation.styles.jsx";

import ScrollIntoView from "react-scroll-into-view";

import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Fragment } from "react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = { color: "rgba(248, 99, 248, 0.966)" };
  return (
    <Fragment>
      <MenuDiv isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-bars"></i>
      </MenuDiv>
      <NavContainer isOpen={isOpen}>
        <NavLinks isOpen={isOpen}>
          <Cross onClick={() => setIsOpen(!isOpen)}>
            <i className="fa-solid fa-x"></i>
          </Cross>
          <ul>
            <li>
              <ScrollIntoView selector="#home">
                <NavLink
                  to="/about"
                  activeStyle={activeStyle}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Home
                </NavLink>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#skills">
                <NavLink
                  to="/skills"
                  activeStyle={activeStyle}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Skills
                </NavLink>
              </ScrollIntoView>
            </li>
            <li>
              <ScrollIntoView selector="#projects">
                <NavLink
                  to="/projects"
                  activeStyle={activeStyle}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Projects
                </NavLink>
              </ScrollIntoView>
            </li>

            <li>
              <ScrollIntoView selector="#contact">
                <NavLink
                  to="/contact"
                  activeStyle={activeStyle}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Contact
                </NavLink>
              </ScrollIntoView>
            </li>
            <BsBoxArrowInUpRight className="icon" />
          </ul>
        </NavLinks>
      </NavContainer>
    </Fragment>
  );
};

export default Navigation;
