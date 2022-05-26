import styled from "styled-components";
import { NavHashLink as Link } from "react-router-hash-link";

export const MenuDiv = styled.div`
  color: white;
  height: 30px;
  width: 30px;
  position: fixed  ;
  
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
  z-index: 100;
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
  }
`;

// export const NavLinks = styled.div`
//   width: 50%;
//   height: 80%;
//   border-radius: 50px;
//   background-color: #3dc9a7;
//   margin-right: 15%;

//   @media (min-width: 800px) {
//     width: 50%;
//     height: 80%;
//   }

//   @media (max-width: 799px) {
//     height: 100vh;
//     border-radius: 0px;
//     position: relative;
//     right:1000px;
//   }

//   ul {
//     display: flex;
//     list-style: none;
//     width: 100%;

//     .icon {
//       @media (min-width: 1501px) {
//         margin-left: -5%;
//       }
//       @media (min-width: 1200px) and (max-width: 1500px) {
//         margin-left: -2%;
//       }
//       @media (max-width: 1200px) and (min-width: 1000px) {
//         margin-left: 3%;
//       }
//     }

//     @media (max-width: 799px) {
//       flex-direction: column;
//     }
//   }

//   li {
//     width: 20%;
//   }
// `;

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
