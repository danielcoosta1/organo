import {
  FormularioContainer,
  FormularioTitle,
  FormularioForm,
  FormularioButton,
  Main
} from "./styles";

import InputDefault from "../InputDefault";
import ListaSupensa from "../ListaSupensa";

import { useState } from "react";

const Formulario = ({ aoColaboradorCadastrado, times, aoTimeCadastrado }) => {
  const [formData, setFormData] = useState({
    nome: "",
    cargo: "",
    imagem: "",
    time: "",
  });

  const [formDataTime, setFormDataTime] = useState({
    nome: "",
    corPrimaria: "",
    corSecundaria: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((formData) => ({ ...formData, [id]: value }));
  };

  const handleChangeTime = (e) => {
    const { id, value } = e.target;
    setFormDataTime((formDataTime) => ({ ...formDataTime, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.time) {
      // Verifica se todas chaves estão preenchidas
      alert("Selecione um time!");
      return;
    }
    if (formData.cargo.length < 3) {
      alert("Cargo muito curto!");
    }

    aoColaboradorCadastrado(formData);

    setFormData({
      // Reseta o formulário
      nome: "",
      cargo: "",
      imagem: "",
      time: "",
    });
  };

  const handleSubmitTime = (event) => {
    event.preventDefault();

    if (
      !formDataTime.nome ||
      !formDataTime.corPrimaria ||
      !formDataTime.corSecundaria
    ) {
      alert("Preencha todos os campos do time!");
      return;
    }

    aoTimeCadastrado(formDataTime);
    setFormDataTime({
      nome: "",
      corPrimaria: "",
      corSecundaria: "",
    });
  };

  return (
 
      <Main>
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
              value={formData.nome}
            />

            {/* Campo Cargo */}
            <InputDefault
              onChange={handleChange}
              label="Cargo"
              id="cargo"
              type="text"
              placeholder="Digite seu cargo"
              value={formData.cargo}
            />

            {/* Campo Imagem*/}
            <InputDefault
              onChange={handleChange}
              label="Imagem"
              id="imagem"
              type="text"
              placeholder="(ex: /assets/seu-nome.webp)"
              value={formData.imagem}
            />

            {/* select */}

            <ListaSupensa
              label="Time"
              id="time" // O mesmo nome do campo no estado
              value={formData.time} // Valor controlado
              onChange={handleChange} // Mesma função que os outros inputs
              options={times.map((time) => time.nome)}
            />

            {/* button */}

            <FormularioButton type="submit">Criar card</FormularioButton>
          </FormularioForm>
        </FormularioContainer>
        <FormularioContainer>
          <FormularioTitle>
            Preencha os dados para criar um novo time
          </FormularioTitle>
          <FormularioForm onSubmit={handleSubmitTime}>
            <InputDefault
              onChange={handleChangeTime}
              label="Nome"
              id="nome"
              type="text"
              placeholder="Digite o nome do time"
              value={formDataTime.nome}
            />
            <InputDefault
              onChange={handleChangeTime}
              label="Cor primária"
              id="corPrimaria"
              type="text"
              placeholder="Digite a cor principal do time"
              value={formDataTime.corPrimaria}
            />
            <InputDefault
              onChange={handleChangeTime}
              label="Cor Secundária"
              id="corSecundaria"
              type="text"
              placeholder="Digite a cor principal do time"
              value={formDataTime.corSecundaria}
            />
            <FormularioButton type="submit">Criar time</FormularioButton>
          </FormularioForm>
        </FormularioContainer>
      </Main>
 
  );
};

export default Formulario;
