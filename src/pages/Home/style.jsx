import styled from "styled-components";

export const Container = styled.section`
  width: min(90%, 1160px);
  margin: 0 auto;
  padding: 44px 0;
`;

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
  place-items: center;

  img:hover{
    opacity: 0.5;
  }
`;

export const AreaMovieDescription = styled.div`
  width: 200px;
  height: 50px;
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 10px;
  background-color: #09b5e1;


  span {
    display: block;
    font-weight: 500;
  }

  p, h1 {
    font-size: 1rem;
    color: #202728;
    padding: 0 16px;
  }
`;
