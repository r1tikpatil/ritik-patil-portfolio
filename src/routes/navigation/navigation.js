import {
  NavContainer,
  // NavLinks,
  NavLink,
  MenuDiv,
} from "./navigation.styles.jsx";

import styled from "styled-components";

import ScrollIntoView from "react-scroll-into-view";

import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Fragment } from "react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const activeStyle = { color: "rgba(248, 99, 248, 0.966)" };
  return (
    <Fragment>
      <MenuDiv onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-bars"></i>
      </MenuDiv>
      <NavContainer>
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

const Cross = styled.div`
  @media (min-width: 800px) {
    display: none;
  }
  @media (max-width: 799px) {
    position: relative;
    left: 87%;
    top: 1%;
    font-size: 1.5rem;
  }
`;

const NavLinks = styled.div`
  width: 50%;
  height: 80%;
  border-radius: 50px;
  background-color: #3dc9a7;
  z-index: 200;

  @media (min-width: 800px) {
    width: 50%;
    height: 80%;
    margin-right: 15%;
  }

  @media (max-width: 799px) {
    height: 105vh;
    width: 100%;
    border-radius: 0px;
    position: relative;
    right: ${({ isOpen }) => (isOpen ? "0px" : "1000px")};
    top: 2%;
  }

  ul {
    display: flex;
    list-style: none;
    width: 100%;
    /* border: 2px solid red; */

    .icon {
      @media (min-width: 1501px) {
        margin-left: -5%;
      }
      @media (min-width: 1200px) and (max-width: 1500px) {
        margin-left: -2%;
      }
      @media (max-width: 1200px) and (min-width: 1000px) {
        margin-left: 3%;
      }
      @media (max-width: 800px) {
        display: none;
      }
    }

    @media (max-width: 799px) {
      flex-direction: column;
      height: 80%;
      width: 70%;
    }
  }

  li {
    width: 20%;

    @media (max-width: 799px) {
      width: 70%;
      height: 10%;
      margin: 30px 0px;
    }
  }
`;

export default Navigation;
