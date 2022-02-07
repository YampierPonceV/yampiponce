import styled from "styled-components";
export const StyleHeader = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  padding: 40px 0 ;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Listas = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;

  li a {
      color: #0c0b0b;
      text-decoration: none;
  }
`;
