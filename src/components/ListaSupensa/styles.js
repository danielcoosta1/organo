import styled from "styled-components";

const FormularioLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.25rem;

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const FormularioSelect = styled.select`
  margin-bottom: 1rem;
  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  padding: 1.5rem 2rem;
  border: none;
  font-size: 0.75rem;

  /* Estilo do select em si */
  color: #afafaf; /* Cor do placeholder */

  &:focus {
    color: black; /* Cor do texto selecionado */
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
`;

export {FormularioLabel,FormularioSelect}

