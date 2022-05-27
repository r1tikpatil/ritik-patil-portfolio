import styled from "styled-components";

export const DivWrapper = styled.div`
  min-height: 90vh;
  margin-left: 15vh;
  margin-right: 15vh;
  text-align: center;
  @media (min-width: 800px) {
    margin: 0;
  }

  @media (max-width: 799px) and (min-width: 600px) {
    margin-left: 5vh;
    margin-bottom: 29rem;
    margin-top: -100px;
  }
  @media (max-width: 599px) and (min-width: 400px) {
    margin-left: 5vh;
    margin-right: 3vh;
    margin-top: -8rem;
    margin-bottom: 22rem;
  }

  @media (max-width: 399px) {
    margin-bottom: 10rem;
    margin-right: 0;
    margin-left: 0;
    height:130vh;
  }
`;
export const Text = styled.h2`
  margin-bottom: 15vh;
  font-size: 2.5rem;
  font-weight: 900;
  color: whitesmoke;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Icons = styled.div`
  height: 5vw;
  display: grid;
  grid-gap: 1em;
  row-gap: 3rem;
  justify-items: center;
  align-items: center;
  img {
    margin-top: 1vh;
    width: 4rem;
  }
  @media (min-width: 1501px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0.2rem;
    row-gap: 3rem;
    img {
      margin-top: -1vh;
      padding: 1rem 2rem;
      width: 7rem;
    }
  }
  @media (min-width: 800px) and (max-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 0.2rem;
    row-gap: 3rem;
    img {
      margin-top: -1vh;
      padding: 1rem 1rem;
      width: 5rem;
    }
  }

  @media (max-width: 799px) and (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    row-gap: 3rem;
    img {
      margin-top: -1vh;
      padding: 1rem 1.5rem;
      width: 7rem;
    }
  }

  @media (min-width: 300px) and (max-width: 599px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    row-gap: 1rem;
    img {
      margin-top: -1vh;
      padding: 1rem 2rem;
      width: 4rem;
    }
  }
`;
