import { Outlet } from "react-router-dom";
import { Fragment } from "react";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.styles.jsx";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer>
         
        </LogoContainer>

        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/skill">Skill </NavLink>
          <NavLink to="/project">Projects </NavLink>
          <NavLink to="/contact">Contact </NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
