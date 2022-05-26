import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  position: relative;

  @media (min-width: 2000px) {
    top: 0;
    left: 20%;
  }
  @media (min-width: 1701px) and (max-width: 2000px) {
    top: 0;
    left: 15%;
  }
  @media (min-width: 1300px) and (max-width: 1700px) {
    top: 0;
    left: 10%;
  }
  @media (min-width: 1100px) and (max-width: 1299px) {
    top: -10px;
    left: 5%;
  }
  @media (max-width: 1099px) and (min-width: 1000px) {
    top: 0;
    left: 0%;
  }
`;

export const CircleOuter = styled.div`
  position: relative;
  height: 40px;
  width: 40px;
  left: 10px;
  margin: 30px;

  @media (min-width: 1050px) {
    margin: 50px 30px;
  }

  @media (max-width: 1049px) and (min-width: 930px) {
    margin: 50px 25px;
  }
  @media (max-width: 929px) and (min-width: 810px) {
    margin: 50px 20px;
  }
  @media (max-width: 809px) and (min-width: 710px) {
    margin: 50px 10px;
  }
  @media (max-width: 709px) and (min-width: 625px) {
    margin: 50px 10px;
  }
  @media (max-width: 624px) and (min-width: 530px) {
    left: 2px;
    margin: 50px 5px;
  }
  @media (max-width: 529px) and (min-width: 510px) {
    left: -5px;
    margin: 50px 5px;
  }
  @media (max-width: 509px) {
    left: 0px;
    margin: 50px 3px;
  }

  .circle1:hover {
    background: #6cc644;
    transition: all 0.5s ease;
  }
  .circle2:hover {
    background: #00aced;
    transition: all 0.5s ease;
  }
  .circle3:hover {
    background: #0077b5;
    transition: all 0.5s ease;
  }
  .circle4:hover {
    background: #d81c3f;
    transition: all 0.5s ease;
  }
`;

export const Circle = styled.div`
  position: relative;
  justify-content: center;
  height: 49px;
  width: 49px;
  align-items: center;
  border-radius: 50%;
  background: #dbeafe;
  backdrop-filter: blur(10px);
  top: 40px;

  @media (max-width: 550px) and (min-width: 365px) {
    height: 30px;
    width: 30px;
  }

  @media (max-width:364px) {
    height:25px;
    width:25px;
  }

  a {
    position: rela;
    top: 33%;
    left: 35%;
    color: black;
    font-size: 15px;
    z-index: 1;

    @media (max-width: 550px) and (min-width: 365px) {
      font-size: 10px;
    }
    @media (max-width: 365px) {
      font-size: 7px;
    }
  }

  i {
    position: relative;
    top: 24%;
    left: 30%;
    font-size: 25px;
    @media (max-width: 550px) and (min-width: 365px) {
      font-size: 20px;
      left: 25%;
      top: 20%;
    }
    @media (max-width: 365px) {
      font-size: 16px;
      left:20%;
      top:15%;
    }
  }

  &:hover {
    transform: translate(0px, -10px);
    transition: all 0.5s ease;
  }

  &:hover i {
    color: white;
    transition: all 0.5s;
  }
  
`;
