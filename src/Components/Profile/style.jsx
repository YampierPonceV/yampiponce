import styled from "styled-components";

export const ContainerPerfil = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1000px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const LastProfile = styled.div`
  display: flex;
  gap: 3rem;

  div {
    padding-top: 24px;
  }

  p {
    line-height: 1.75rem;
    font-size: 1.125rem;
    color: rgba(75, 85, 99, 1);
    margin: 0;
  }
  h1 {
    font-size: 3rem;
    margin: 0;
    padding-bottom: 24px;
    display: flex;
  }

  img {
    border-radius: 50%;
  }

  @media screen and (max-width: 1000px){
    flex-direction: column;
    align-items: center;
    gap: 0;

    img {
      order: 1;
    }
    div {
      order: 2;
    }
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Social = styled.div`
  display: flex;
  align-items: flex-end;
  height: 100px;
  img {
    margin-right: 16px;
  }
  p{
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    color: rgba(75, 85, 99, 1);
  }
  a{
    color: black;
    font-weight: bold;
  }
`;
