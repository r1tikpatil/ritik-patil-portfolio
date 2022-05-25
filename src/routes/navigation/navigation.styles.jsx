import styled from "styled-components";
import { NavHashLink as Link } from "react-router-hash-link";

export const NavContainer = styled.div`
  height: 70px;
  width: 100%;
  margin-bottom: 1px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  position: fixed;
  z-index: 100;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 80%;
  border-radius: 50px;
  background-color: #3dc9a7;
  margin-right: 15%;

  ul {
    display: flex;
    list-style: none;
    width: 100%;
  }

  li {
    width: 20%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 45px;
  color: white;
  font-weight: 500;
  text-decoration: none;
  font-size: 1.3rem;
  position: relative;
  z-index: 2;
  transition: color 1s;
`;

// export const NavContainer = styled.nav`
//   min-height: 13vh;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
//   background: #081730b9;
//   backdrop-filter: blur(3px);
//   -webkit-backdrop-filter: blur(3px);
//   overflow: hidden;
//   padding: 0rem 8rem;
//   position: fixed;
//   top: 0;
//   width: 100%;
//   z-index: 1;
//   @media (max-width: 768px) {
//     display: none;
//   }
//   a {
//     font-weight: 700;
//     color: whitesmoke;
//     text-decoration: none;
//     font-size: 1rem;
//   }
// ul {
//   display: flex;
//   list-style: none;
// }

// li {
//   margin-bottom: 0.5rem;
//   padding-left: 5rem;
//   position: relative;
// }
//   .icon {
//     font-size: 1rem;
//     color: whitesmoke;
//     margin-left: 0.5rem;
//   }
// `;
