import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 99%;
  height: 110vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const H2 = styled.h2`
  font-weight: 600;
  font-size: 2.5rem;
  color: white;
  text-shadow: 1px 1px #3dc9a7;
  text-align: center;
  margin-bottom: 1em;
  letter-spacing: 2px;
  @media (max-width: 1300px) and (min-width: 1170px) {
    margin-top: -10%;
  }
  @media (max-width: 1170px) and (min-width: 1070px) {
    margin-top: -5%;
  }
  @media (max-width: 1069px) and (min-width: 800px) {
    margin-top: -15%;
  }

  @media (max-width: 799px) {
    margin-top: -10%;
  }
  span {
    margin-right: 10px;
  }
`;

export const FormContainer = styled.div`
  height: 75%;
  width: 40%;
  box-shadow: 0 0 6px 5px gray;
  border: 2px solid white;
  border-radius: 30px;

  @media (min-width: 1300px) {
    height: 85%;
  }

  @media (min-width: 1070px) and (max-width: 1299px) {
    height: 85%;
  }

  @media (min-width: 600px) and (max-width: 1068px) {
    height: 70%;
  }

  @media (max-width: 599px) {
    height: 70%;
  }

  form {
    margin-top: 6%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 13px 0;
    position: relative;

    .input {
      border: none;
      width: 80%;
      height: 50px;
      border-bottom: 2px solid white;
      background-color: transparent;
      font-size: 1.3rem;
      padding-left: 3%;
      padding-bottom: 0;
      margin-bottom: 5%;
      color: white;
      letter-spacing: 2px;
    }

    .input:focus {
      box-shadow: 0 0 6px 3px grey;
      border: none;
      color: white;
    }
    .input:active {
    }

    .message {
      width: 85%;
      background-color: transparent;
      font-size: 1.3rem;
      padding-left: 3%;
      padding-bottom: 0;
      margin-bottom: 5%;
      border: 2px solid white;
      box-sizing: border-box;
      padding-top: 3%;
      border-radius: 30px;
    }

    .message:focus {
      color: white;
      box-shadow: 0 0 6px 3px grey;
      border: none;
      box-sizing: border-box;
    }

    .button {
      width: 35%;
      height: 50px;
      font-size: 1.5rem;
      background-color: transparent;
      border: 2px outset white;
      color: white;
      position: absolute;
      top: 95%;
      left: 10%;
      border-radius: 30px;

      @media (max-width: 1249px) {
        font-size: 1rem;
      }

      @media (min-width: 626px) and (max-width: 873px) {
        width: 45%;
        font-size: 15px;
      }
      @media (max-width: 625px) {
        width: 70%;
      }
    }

    .button:hover {
      box-shadow: 0 0 7px 3px grey;
      cursor: pointer;
      border: none;
    }

    .button:active {
      transform: scale(0.95);
    }
  }
`;
