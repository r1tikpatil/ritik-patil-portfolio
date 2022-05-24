import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment } from "react";
import contentCard from "../project0-card-content/content.component";
import Card from "../project-card/project-card.component";

import { ProjectContainer, H2 } from "./projects.styles";

const Projects = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <Fragment id="projects">
      <H2>Projects</H2>
      <ProjectContainer id="projects">
        {contentCard.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ProjectContainer>
    </Fragment>
  );
};

export default Projects;
