import styled from "styled-components";

const FormularioLabel = styled.label`
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 0.25rem;

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
  }
`;

const FormularioInput = styled.input`
  margin-bottom: 1rem;
  background: #ffffff;
  mix-blend-mode: normal;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.06);
  border: none;
  padding: 1.5rem 2rem;
  &::placeholder {
    color: #afafaf;
    font-size: 0.75rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media screen and (max-width: 420px) {
   padding: 0.5rem 1rem;
  }
`;

export { FormularioLabel, FormularioInput };
