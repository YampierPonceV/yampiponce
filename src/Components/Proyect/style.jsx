import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 7px;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.2),
    0 -2px 4px -2px rgba(0, 0, 0, 0.2);
  h3 {
    margin-top: 0;
  }
`;

export const Recentes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
`;
