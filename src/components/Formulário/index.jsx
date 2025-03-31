import {
  FormularioContainer,
  FormularioTitle,
  FormularioForm,
  FormularioButton,
} from "./styles";

import InputDefault from "../InputDefault";
import ListaSupensa from "../ListaSupensa";

import { useState } from "react";

const Formulario = ({ aoColaboradorCadastrado, times }) => {
  const [formData, setFormData] = useState({
    nome: "",
    cargo: "",
    imagem: "",
    time: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    aoColaboradorCadastrado(formData);
    setFormData({
      // Reseta o formulário
      nome: "",
      cargo: "",
      imagem: "",
      time: "",
    });
  };

  return (
    <FormularioContainer>
      <FormularioTitle>
        Preencha os dados para criar o card do colaborador
      </FormularioTitle>
      <FormularioForm onSubmit={handleSubmit}>
        {/* Campo Nome */}
        <InputDefault
          onChange={handleChange}
          label="Nome"
          id="nome"
          type="text"
          placeholder="Digite seu nome"
        />

        {/* Campo Cargo */}
        <InputDefault
          onChange={handleChange}
          label="Cargo"
          id="cargo"
          type="text"
          placeholder="Digite seu cargo"
        />

        {/* Campo Imagem*/}
        <InputDefault
          onChange={handleChange}
          label="Imagem"
          id="imagem"
          type="text"
          placeholder="Digite a URL da imagem"
        />

        {/* select */}

        <ListaSupensa
          label="Time"
          id="time" // O mesmo nome do campo no estado
          value={formData.time} // Valor controlado
          onChange={handleChange} // Mesma função que os outros inputs
          options={times}
        />
        <div></div>
        {/* button */}

        <FormularioButton type="submit">Criar card</FormularioButton>
      </FormularioForm>
    </FormularioContainer>
  );
};

export default Formulario;
