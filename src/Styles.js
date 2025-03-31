import styled from "styled-components";

const TimeConteiner = styled.section`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); */
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  max-width: 90rem;
  margin: 0 auto;
`;

const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem auto 3rem auto;
  color: #6278f7;
  font-family: "Prata", serif;

  h1 {
    border-bottom: 3px solid;
  }
`;

export { TimeConteiner, Titulo };
