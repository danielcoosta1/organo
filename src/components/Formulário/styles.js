import styled from "styled-components";

const FormularioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  padding: 5rem 10rem;
  max-width: 60rem;
  margin: 0 auto;

  margin-top: 5rem;

  background: #f7f7f7;
  box-shadow: 7px 7px 15px rgba(0, 0, 0, 0.08);
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    padding: 2rem;
    max-width: 30rem;
  }
`;

const FormularioTitle = styled.h1`
  font-size: 2rem;
  text-align: start;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FormularioForm = styled.form`
  display: flex;
  flex-direction: column;
`;

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

const FormularioOption = styled.option``;

const FormularioButton = styled.button`
  width: 20%;
  background: #6278f7;
  mix-blend-mode: normal;
  border-radius: 10px;

  padding: 1rem 1.5rem;
  border: none;

  font-family: "Montserrat";
  font-size: 1rem;

  line-height: 24px;

  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.5rem 1rem;
  }
`;

export {
  FormularioContainer,
  FormularioTitle,
  FormularioForm,
  FormularioLabel,
  FormularioInput,
  FormularioSelect,
  FormularioOption,
  FormularioButton,
};
