import React from "react";
import bootstrap from "../../assets/bootstrap.svg";
import css from "../../assets/css.svg";
import cpp from "../../assets/cpp.svg";
import git from "../../assets/git.svg";
import github from "../../assets/github.svg";
import html from "../../assets/html.svg";
import js from "../../assets/js.svg";
import mongodb from "../../assets/mongodb.svg";
import python from "../../assets/pyt.svg";
import react from "../../assets/react.svg";
import redux from "../../assets/redux.svg";
import termin from "../../assets/terminal.svg";
import vscode from "../../assets/vscode.svg";
import styledc from "../../assets/styledc.png";
import AOS from "aos";
import "aos/dist/aos.css";

import { DivWrapper, Text, Icons } from "./skills.styles";

const Skills = () => {
  AOS.init({
    duration: 1200,
  });

  return (
    <>
      <DivWrapper id="skills">
        <Text>Tech & Tools</Text>
        <Icons data-aos="zoom-in">
          <img src={cpp} alt="C++" title="C++" />
          <img src={python} alt="python" title="Python" />
          <img src={html} alt="html" title="HTML" />
          <img src={css} alt="css" title="CSS" />
          <img src={bootstrap} alt="bootstrap" title="Bootstrap" />
          <img src={js} alt="javascript" title="Javascript" />
          <img src={react} alt="styledc" title="React" />
          <img
            src={styledc}
            alt="styled-components"
            title="Styled-components"
          />
          <img src={mongodb} alt="mongodb" title="Mongodb" />
          <img src={redux} alt="redux" title="Redux" />
          <img src={git} alt="git" title="git" />
          <img src={github} alt="github" title="github" />
          <img src={vscode} alt="vscode" title="vs code" />
          <img src={termin} alt="terminal" title="terminal" />
        </Icons>
      </DivWrapper>
    </>
  );
};

export default Skills;
