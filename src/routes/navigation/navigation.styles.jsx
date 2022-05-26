import styled from "styled-components";
import { NavHashLink as Link } from "react-router-hash-link";

export const Cross = styled.div`
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
export const MenuDiv = styled.div`
  color: white;
  height: 30px;
  width: 30px;
  position: fixed;

  i {
    font-size: 1.8rem;
  }

  @media (min-width: 800px) {
    display: none;
  }

  @media (max-width: 799px) {
    z-index: 150;
    margin-top: 2%;
    margin-left: 10%;
  }
`;
export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  margin-bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  @media (min-width: 800px) {
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    overflow: hidden;
    background: #081730b9;
  }

  @media (max-width: 799px) {
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    height: 100vh;
    background: none;
    z-index: ${({isOpen}) => (isOpen ? "2" : "-1000")};
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 80%;
  border-radius: 50px;
  background-color: #3dc9a7;
  z-index: 100;

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
    transition: all 1s;
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
      transition: all 3s;
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

export const NavLink = styled(Link)`
  padding: 10px 45px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  z-index: 2;
  transition: color 1s;

  @media (max-width: 1000px) and (min-width: 800px) {
    font-size: 1.3rem;
    padding: 10px 1px;
  }

  @media (max-width: 799px) {
    font-size: 2.5rem;
  }

  &:focus {
    color: black;
  }
`;
