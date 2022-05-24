import Navigation from "./routes/navigation/navigation";
import Contact from "./components/contact-info/contact-info.component";
import Projects from "./components/projects/projects.component";
import Home from "./routes/home/home";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
