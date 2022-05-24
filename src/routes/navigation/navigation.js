import { NavHashLink as Link } from "react-router-hash-link";

import { NavContainer } from "./navigation.styles.jsx";

import ScrollIntoView from "react-scroll-into-view";

import { BsBoxArrowInUpRight } from "react-icons/bs";

const Navigation = () => {
  const activeStyle = { color: "rgba(248, 99, 248, 0.966)" };
  return (
    <NavContainer>
      <ul>
        <li>
          <ScrollIntoView selector="#home">
            <Link to="/about" activeStyle={activeStyle}>
              Home
            </Link>
          </ScrollIntoView>
        </li>
        <li>
          <ScrollIntoView selector="#skills">
            <Link to="/skills" activeStyle={activeStyle}>
              Skills
            </Link>
          </ScrollIntoView>
        </li>
        <li>
          <ScrollIntoView selector="#projects">
            <Link to="/projects" activeStyle={activeStyle}>
              Projects
            </Link>
          </ScrollIntoView>
        </li>

        <li>
          <ScrollIntoView selector="#contact">
            <Link to="/contact" activeStyle={activeStyle}>
              Contact
            </Link>
          </ScrollIntoView>
        </li>
        <BsBoxArrowInUpRight className="icon" />
      </ul>
    </NavContainer>
  );
};

export default Navigation;
