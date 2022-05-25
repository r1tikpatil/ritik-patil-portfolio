import { NavContainer, NavLinks, NavLink } from "./navigation.styles.jsx";

import ScrollIntoView from "react-scroll-into-view";

import { BsBoxArrowInUpRight } from "react-icons/bs";

import { useState } from "react";

const Navigation = () => {
  const [visited, setVisited] = useState(false);

  const activeStyle = { color: "rgba(248, 99, 248, 0.966)" };
  return (
    <NavContainer>
      <NavLinks>
        <ul>
          <li>
            <ScrollIntoView selector="#home">
              <NavLink to="/about" activeStyle={activeStyle}>
                Home
              </NavLink>
            </ScrollIntoView>
          </li>
          <li>
            <ScrollIntoView selector="#skills">
              <NavLink
                to="/skills"
                activeStyle={activeStyle}
                onClick={(visited) => setVisited(visited)}
              >
                Skills
              </NavLink>
            </ScrollIntoView>
          </li>
          <li>
            <ScrollIntoView selector="#projects">
              <NavLink to="/projects" activeStyle={activeStyle}>
                Projects
              </NavLink>
            </ScrollIntoView>
          </li>

          <li>
            <ScrollIntoView selector="#contact">
              <NavLink to="/contact" activeStyle={activeStyle}>
                Contact
              </NavLink>
            </ScrollIntoView>
          </li>
          <BsBoxArrowInUpRight className="icon" />
        </ul>
      </NavLinks>
    </NavContainer>
  );
};

export default Navigation;
