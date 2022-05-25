import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 99%;
  height: 97vh;
  background-color: transparent;
  z-index: -1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 5%;
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
    font-size: 2.5rem;
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
`;
export const AboutDiv = styled.div`
  width: 50%;
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

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
