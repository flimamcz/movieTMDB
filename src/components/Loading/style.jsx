import styled from "styled-components";

export const ContainerLoading = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.95);
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const LoadingContent = styled.span`
  display: block;
  width: 90px;
  height: 90px;
  background: transparent;
  border: 3px solid #eae1e1;
  border-top-color: blue;
  border-radius: 50%;
  animation: is-loading 1s infinite;
  margin: 0 auto;

  @keyframes is-loading {
    from {
      transform: rotate(-1turn);
    }
  }
`;
