import styled from "styled-components";

export const Container = styled.div`
  width: min(100%, 1260px);
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;

  @media (max-width: 640px){
    width: min(90%);
    margin-bottom: 32px;
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  justify-content: center;

  @media (max-width: 640px){
    flex-direction: column;
    gap: 30px;
  }
  `;

export const MovieImg = styled.div`
  img {
    width: 250px;
  }

  @media (max-width: 640px){
    img {
      width: 200px;
    }
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
    margin-bottom: 32px;
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

  @media (max-width: 640px){
    width: 80%;

    h1 {
      font-size: 2rem;
      text-align: center;
    }

    .release_date{
      text-align: center;
    }

    p span{
      display: block;
    }

    p span.sinopse{
      font-size: 1.8rem;
      margin-bottom: 20px;
    }


    .buttons {
      justify-content: center;
    }
  }

`;
