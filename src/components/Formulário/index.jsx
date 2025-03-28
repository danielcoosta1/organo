import {
  FormularioContainer,
  FormularioTitle,
  FormularioForm,
  FormularioButton,
} from "./styles";

import InputDefault from "../InputDefault";
import ListaSupensa from "../ListaSupensa";

import { useRef } from "react";


const Formulario = () => {

  const inputName = useRef();
  const inputCargo = useRef();
  const inputImagem = useRef();

  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputName.current.value);
    console.log(inputCargo.current.value);
    console.log(inputImagem.current.value)

  };

  return (
    <FormularioContainer>
      <FormularioTitle>
        Preencha os dados para criar o card do colaborador
      </FormularioTitle>
      <FormularioForm onSubmit={handleSubmit}>
      
        {/* Campo Nome */}
        <InputDefault
          label="Nome"
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          ref= {inputName}
        />

        {/* Campo Cargo */}
        <InputDefault
          label="Cargo"
          id="cargo"
          type="text"
          placeholder="Digite seu cargo"
          ref={inputCargo}
          
        />

        {/* Campo Imagem*/}
        <InputDefault
          label="Imagem"
          id="imagem"
          type="text"
          placeholder="Digite a URL da imagem"
          ref={inputImagem}
        />

        {/* select */}

        <ListaSupensa
          label="Time"
          id="time"
          defaultValue=""
        ></ListaSupensa>

        {/* button */}

        <FormularioButton type="submit">Criar card</FormularioButton>
      </FormularioForm>
    </FormularioContainer>
  );
};

export default Formulario;
