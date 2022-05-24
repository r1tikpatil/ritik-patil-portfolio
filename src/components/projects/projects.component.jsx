import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment } from "react";
import contentCard from "../content/content.component";
import Card from "../project-card/project-card.component";

import { ProjectContainer, H2 } from "./projects.styles";

const Projects = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <Fragment>
      <H2>Projects</H2>
      <ProjectContainer >
        {contentCard.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ProjectContainer>
    </Fragment>
  );
};

export default Projects;
