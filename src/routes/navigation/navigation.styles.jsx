import styled from "styled-components";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";

// export const NavigationContainer = styled.div`
//   @media screen and (max-width: 1000px) {
//     display: none;
//   }

//   @media screen and (min-width: 1001px) {
//     height: 70px;
//     width: 100%;
//     margin-bottom: 1px;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
//     position: fixed;
//     z-index: 100;
//   }
// `;

// export const LogoContainer = styled.div`
//   width: 50px;
//   height: 50px;
// `;

// export const NavLinks = styled.div`
//   width: 50%;
//   height: 80%;
//   display: flex;
//   border-radius: 50px;
//   align-items: center;
//   justify-content: space-evenly;
//   background-color: #3dc9a7;
//   margin-right: 8%;
// `;

// export const NavLink = styled(Link)`
//   padding: 10px 45px;
//   color: white;
//   font-weight: 500;
//   text-decoration: none;
//   font-size: 1.3rem;
//   position: relative;
//   z-index: 2;
//   transition: color 1s;

//   &::after {
//     content: "";
//     background-color: white;
//     width: 100%;
//     height: 100%;
//     border-radius: 30px;
//     position: absolute;
//     top: 100%;
//     left: 50%;
//     z-index: -1;
//     opacity: 0;
//     transform: translate(-50%, -50%);
//     transition: all 0.5s;
//   }

//   &:hover {
//     color: black;
//   }

//   &:hover::after {
//     opacity: 1;
//     top: 50%;
//   }
// `;

export const NavContainer = styled.nav`
  min-height: 13vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: #081730b9;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  overflow: hidden;
  padding: 0rem 8rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  @media (max-width: 768px) {
    display: none;
  }
  a {
    font-weight: 700;
    color: whitesmoke;
    text-decoration: none;
    font-size: 1rem;
  }
  ul {
    display: flex;
    list-style: none;
  }

  li {
    margin-bottom: 0.5rem;
    padding-left: 5rem;
    position: relative;
  }
  .icon {
    font-size: 1rem;
    color: whitesmoke;
    margin-left: 0.5rem;
  }
`;
