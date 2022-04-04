import styled from "styled-components";

export const HeaderTop = styled.header`
  padding: 24px 0;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .btn-header {
    font-size: 1.6rem;
    color: #202827;
    display: block;
    font-weight: 800;
    background: linear-gradient(180deg, #81cba8 0%, #09b5e1 100%);
    padding: 12px 22px;
    border-radius: 3px;
  }

  .btn-header:hover {
    background: linear-gradient(240deg, #81cba8 0%, #09b5e1 100%);
    transition: 0.4s ease-out;
    transform: scale(1.03);
  }
`;

export const Nav = styled.nav`
  margin-top: 22px;
  text-align: center;
  background-color: #eae1e1;
  padding: 16px;

  h1 {
    font-size: 2.4rem;
    color: #202827;
  }
`;
