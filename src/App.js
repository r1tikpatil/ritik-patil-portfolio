import { Fragment } from "react";

import Navigation from "./routes/navigation/navigation";
import Contact from "./components/contact-info/contact-info.component";
import Projects from "./components/projects/projects.component";
import Home from "./routes/home/home";
import Skills from "./components/skills/skill.component";

function App() {
  return (
    <Fragment>
      <Navigation />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </Fragment>
  );
}

export default App;
