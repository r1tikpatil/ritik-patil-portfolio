import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  max-width: 930px;
  background-color: rgba(255, 255, 255, 0.972);
  box-shadow: 1px 3px 32px -7px black;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  img {
    width: 97%;
    border-radius: 10px;
    margin-top: 0.7rem;
    box-shadow: 1px 3px 32px -1px black;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 411px) {
    flex-direction: column;
  }
`;

export const CardContent = styled.div`
  text-align: left;
  h3 {
    margin: 1rem;
    padding: 1rem;
    font-size: 1.5rem;
    color: #3d3f42;
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  p {
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 400;
    color: #343a40;
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }
  .tech {
    margin: 1rem;
    padding: 1rem;
    font-size: 1rem;
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }
`;

export const CardLink = styled.div`
  .icon {
    font-size: 2rem;
    color: #343a40;
    margin: 2.5rem 2rem 1rem 0.5rem;
    @media (max-width: 411px) {
      margin: 0.7rem 1rem 1rem 2rem;
    }
    &:hover {
      color: rgba(255, 0, 255, 0.513);
      transition: all 0.5s ease;
    }
  }
`;
