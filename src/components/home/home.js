import {
  HomeContainer,
  ImageContainer,
  IntroContainer,
  NameDiv,
  AboutDiv,
  Image,
  Aboutopen,
} from "./home.styles";

import { motion } from "framer-motion";
import Typed from "react-typed";
import { useState } from "react";

import cv from "../../assets/Resume.pdf";

const buttonVariant = {
  hidden: {
    x: "-500px",
  },
  hide: {
    x: "500px",
  },
  visible: {
    x: 0,

    transition: {
      duration: 0.3,
    },
  },
};

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ResumeOpen = () => {
    window.open(cv);
  };

  return (
    <>
      <Aboutopen isOpen={isOpen}>
          <div className="about-me">
          My self ritik
          
          </div>
      
      </Aboutopen>
      <HomeContainer id="home">
        <ImageContainer style={{ cursor: "pointer" }}>
          <Image>
            <img
              src="https://image.shutterstock.com/image-vector/vector-male-face-avatar-logo-600w-424801768.jpg"
              alt="Ritik Patil"
            />
          </Image>
        </ImageContainer>

        <IntroContainer>
          <NameDiv>
            <span className="hello block">Hello!</span>
            <span className="name block">
              My name is <span>Ritik Patil</span>
            </span>
            <span className="block">and I'm a </span>
            <span className="typewritter">
              <Typed
                strings={["MERN Stack Developer .", "Competitive Programmer ."]}
                typeSpeed={70}
                backDelay={1100}
                backSpeed={50}
                loop
              />
            </span>
          </NameDiv>

          <AboutDiv>
            <motion.button
              variants={buttonVariant}
              initial="hidden"
              animate="visible"
              className="btn"
              onClick={ResumeOpen}
            >
              Resume
            </motion.button>
            <motion.button
              variants={buttonVariant}
              initial="hide"
              animate="visible"
              className="btn aa"
              onClick={() => setIsOpen(!isOpen)}
            >
              About Me
            </motion.button>
          </AboutDiv>
        </IntroContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
