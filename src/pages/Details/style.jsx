import styled from "styled-components";

export const Container = styled.div`
  width: min(100%, 1260px);
  margin: 24px auto;
`;

export const MovieDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin: 20px;
  justify-content: center;
`;

export const MovieImg = styled.div`
  img {
    width: 250px;
  }
`;

export const DetailsText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
  }

  p span {
    font-size: 1.2rem;
  }

  .buttons {
    display: flex;
    gap: 20px;
  }

  .button {
    font-size: 1.4rem;
    font-weight: 500;
    background: linear-gradient(180deg, #88cca5 0%, #05b4e3 100%);
    padding: 12px 20px;
    border: none;
    height: 45px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: 2px 4px 6px rgba(255, 255, 255, 0.09);
  }

  .button:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;
