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
  FormularioButton,
};
