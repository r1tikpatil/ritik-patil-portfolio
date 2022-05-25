import { Main, CircleOuter, Circle } from "./social-icons.styles";

const SocialIcons = () => {
  return (
    <div>
      <Main>
        <CircleOuter>
          <Circle className="circle1">
            <a
              href="https://github.com/r1tikpatil"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-github"></i>
            </a>
          </Circle>
        </CircleOuter>
        <CircleOuter>
          <Circle className="circle2">
            <a
              href="https://twitter.com/ritik_patil_"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </Circle>
        </CircleOuter>
        <CircleOuter>
          <Circle className="circle3">
            <a
              href="https://www.linkedin.com/in/ritik-patil-4a6597216/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </Circle>
        </CircleOuter>
        <CircleOuter>
          <Circle className="circle4">
            <a
              href="https://www.instagram.com/_ritik.patil_/"
              rel="noreferrer"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </Circle>
        </CircleOuter>
      </Main>
    </div>
  );
};

export default SocialIcons;
