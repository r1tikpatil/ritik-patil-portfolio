import styled from "styled-components";

export const Aboutopen = styled.div`
  transition: all 3s;
  overflow: hidden;

  @media (min-width: 800px) {
    width: 30%;
    height: 90vh;
    position: fixed;
    top: 74px;
    left: ${({ isOpen }) => (isOpen ? "80%" : "3000px")};
    border: 2px solid grey;
    box-shadow: 0 0 6px 4px white;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  @media (max-width: 799px) and (min-width: 600px) {
    width: 30%;
    height: 90vh;
    position: fixed;
    top: 34px;
    left: ${({ isOpen }) => (isOpen ? "70%" : "3000px")};
    border: 2px solid grey;
    box-shadow: 0 0 6px 4px white;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  @media (max-width: 599px) and (min-width: 510px) {
    width: 40%;
    position: fixed;
    top: 34px;
    left: ${({ isOpen }) => (isOpen ? "60%" : "3000px")};
    border: 2px solid grey;
    box-shadow: 0 0 6px 4px white;
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
    z-index: 100;
    height: 70vh;
  }
  @media (max-width: 510px) and (min-width: 400px) {
    width: 80%;
    position: absolute;
    bottom: ${({ isOpen }) => (isOpen ? "45%" : "3000px")};
    border: 2px solid grey;
    box-shadow: 0 0 6px 4px white;
    background-color: black;
    z-index: 100;
    height: 40vh;
    left: 8%;
  }
  @media (max-width: 399px) and (min-width: 300px) {
    width: 90%;
    position: absolute;
    bottom: ${({ isOpen }) => (isOpen ? "45%" : "3000px")};
    border: 2px solid grey;
    box-shadow: 0 0 6px 4px white;
    background-color: black;
    z-index: 100;
    height: 45vh;
    left: 4%;
  }

  .about-me {
    position: relative;
    top: 25%;
    left: 7%;
    width: 60%;
    @media (max-width: 799px) and (min-width: 600px) {
      left: 9%;
      top: 20%;
      width: 70%;
    }
    @media (max-width: 599px) and (min-width: 510px) {
      left: 11%;
      top: 16%;
      width: 80%;
    }
    @media (max-width: 509px) {
      top: 8%;
      width: 80%;
    }

    h3 {
      color: #3dc9a7;
      letter-spacing: 2px;
      @media (max-width: 400px) {
        letter-spacing: 0;
      }
    }

    ul {
      li {
        list-style-type: square;
        margin-top: 20px;
        letter-spacing: 1px;

        @media (max-width: 799px) and (min-width: 750px) {
          margin-top: 30px;
          letter-spacing: 1px;
        }
        @media (max-width: 750px) and (min-width: 700px) {
          margin-top: 20px;
          letter-spacing: 1px;
        }
        @media (max-width: 699px) and (min-width: 600px) {
          margin-top: 2px;
          letter-spacing: 0;
        }

        @media (max-width: 599px) and (min-width: 400px) {
          margin-top: 0px;
          letter-spacing: 0;
        }

        a {
          color: #3dc9a7;
          text-decoration: none;
        }
      }
    }
  }
`;

export const HomeContainer = styled.div`
  width: 99%;
  height: 97vh;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 5%;
  z-index: 1;

  @media (max-width: 799px) {
    overflow: hidden;
    padding-left: 0px;
  }
`;

export const ImageContainer = styled.div`
  width: 30%;
  height: 50%;
  overflow: hidden;
  padding-top: 2%;
  padding-left: 2%;
`;
export const Image = styled.div`
  width: 75%;
  height: 90%;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    box-shadow: 0 0 16px 1px lightblue;
  }

  @media (max-width: 799px) {
    display: none;
  }
`;

export const IntroContainer = styled.div`
  width: 45%;
  height: 80%;
  margin-left: 2%;
  padding: 2%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (max-width: 799px) and (min-width: 570px) {
    width: 60%;
    font-size: 1rem;
    position: relative;
    right: 20%;
  }
  @media (max-width: 599px) and (min-width: 450px) {
    width: 60%;
    font-size: 1rem;
    position: relative;
    right: 25%;
  }
  @media (max-width: 449px) and (min-width: 400px) {
    width: 70%;
    position: relative;
    right: 25%;
  }
  @media (max-width: 400px) and (min-width: 300px) {
    width: 90%;
    position: relative;
    right: 20%;
  }
`;

export const NameDiv = styled.div`
  font-size: 2.5rem;
  width: 98%;
  height: 50%;
  font-weight: 700;
  font-size: 2.5rem;
  padding-top: 7%;
  .hello {
    color: #3dc9a7;
  }

  .name {
    span {
      color: #3dc9a7;
    }
  }

  .block {
    display: block;
  }

  .typewritter {
    color: #3dc9a7;
  }

  @media (min-width: 1050px) and (max-width: 1200px) {
    font-size: 2rem;
  }
  @media (min-width: 578px) and (max-width: 1049px) {
    font-size: 1.5rem;
  }
  @media (max-width: 577px) and (min-width: 400px) {
    font-size: 1.3rem;
    width: 100%;
    height: 30%;
  }
  @media (max-width: 399px) and (min-width: 300px) {
    font-size: 1.3rem;
    width: 100%;
    height: 30%;
  }
`;
export const AboutDiv = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 1350px) and (min-width: 800px) {
    width: 80%;
  }

  @media (max-width: 799px) and (min-width: 670px) {
    width: 75%;
  }

  @media (max-width: 669px) {
    width: 97%;
  }

  .btn {
    height: 40%;
    width: 60%;
    background-color: transparent;
    border: 2px solid #2eba8b;
    backdrop-filter: blur(30px);
    margin: 15px;
    cursor: pointer;
    z-index: 1;
    color: white;
    font-size: 1.3rem;
    font-weight: 400;
    transition: all 1s;

    @media (max-width: 1200px) and (min-width: 800px) {
      width: 700px;
      font-size: 1rem;
    }
    @media (max-width: 799px) and (min-width: 400px) {
      width: 500px;
      font-size: 1rem;
    }
  }

  .btn:hover {
    color: black;
  }

  .btn:before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 1;
    content: "";
    background: #3dc9a7;
  }

  .btn:hover:before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
`;
