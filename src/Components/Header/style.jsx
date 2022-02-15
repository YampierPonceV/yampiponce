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
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

export const Logo = styled.a`
color: white;
background: black;
padding: 7px;
display: inline-block;
border-radius: 7px;
cursor: pointer;
text-decoration: none;
`
;
export const Listas = styled.ul`
  list-style: none;
  display: flex;

  li a {
      color:  rgba(17,24,39,.7);
      text-decoration: none;
      padding: 1rem;
      font-weight: 500;
  }
`;
