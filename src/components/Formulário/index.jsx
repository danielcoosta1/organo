import {
  FormularioContainer,
  FormularioTitle,
  FormularioForm,
  FormularioLabel,
  FormularioInput,
  FormularioSelect,
  FormularioOption,
  FormularioButton,
} from "./styles";

function Formulario() {
  return (
    <FormularioContainer>
      <FormularioTitle>
        Preencha os dados para criar o card do colaborador
      </FormularioTitle>
      <FormularioForm>
        <FormularioLabel htmlFor="nome">Nome</FormularioLabel>
        <FormularioInput type="text" id="nome" placeholder="Digite seu nome" />
        <FormularioLabel htmlFor="cargo">Cargo</FormularioLabel>
        <FormularioInput
          type="text"
          id="cargo"
          placeholder="Digite seu cargo"
        />
        <FormularioLabel htmlFor="imagem">Imagem</FormularioLabel>
        <FormularioInput
          type="text"
          id="imagem"
          placeholder="Digite o endereço da imagem"
        />
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
        <FormularioButton type="submit">Criar Card</FormularioButton>
      </FormularioForm>
    </FormularioContainer>
    
  );
}

export default Formulario;
