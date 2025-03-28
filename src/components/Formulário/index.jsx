import {
  FormularioContainer,
  FormularioTitle,
  FormularioForm,
  FormularioLabel,
  FormularioSelect,
  FormularioOption,
} from "./styles";

import InputDefault from "../InputDefault";

const Formulario = () => {
  return (
    <FormularioContainer>
      <FormularioTitle>
        Preencha os dados para criar o card do colaborador
      </FormularioTitle>
      <FormularioForm>
        {/* Campo Nome */}
        <InputDefault
          label="Nome"
          id="nome"
          type="text"
          placeholder="Digite seu nome"
          required
        />

        {/* Campo Cargo */}
        <InputDefault
          label="Cargo"
          id="cargo"
          type="text"
          placeholder="Digite seu cargo"
        />

        {/* Campo Imagem (upload) */}
        <InputDefault label="Imagem" id="imagem" type="file" accept="image/*" />

        {/* select */}
        <FormularioLabel htmlFor="time">Time</FormularioLabel>
        <FormularioSelect id="time" defaultValue="Selecione o time" required>
          <FormularioOption disabled>Selecione o time</FormularioOption>
          <FormularioOption value="programacao">Programação</FormularioOption>
          <FormularioOption value="front-end">Front-End</FormularioOption>
          <FormularioOption value="datascience">Data Science</FormularioOption>
          <FormularioOption value="devops">Devops</FormularioOption>
          <FormularioOption value="uxd&design">UX e Design</FormularioOption>
          <FormularioOption value="mobile">Mobile</FormularioOption>
          <FormularioOption value="inovacao&gestao">
            Inovação e Gestão
          </FormularioOption>
        </FormularioSelect>
      </FormularioForm>
    </FormularioContainer>
  );
};

export default Formulario;


