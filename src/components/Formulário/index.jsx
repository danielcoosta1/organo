import {
  FormularioContainer,
  FormularioTitle,
  FormularioForm,
  FormularioButton,
} from "./styles";

import InputDefault from "../InputDefault";
import ListaSupensa from "../ListaSupensa";

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

        {/* Campo Imagem*/}
        <InputDefault
          label="Imagem"
          id="imagem"
          type="text"
          placeholder="Digite a URL da imagem"
        />

        {/* select */}

        <ListaSupensa
          label="Time"
          id="time"
          defaultValue="Escolha seu time"
        ></ListaSupensa>

        <FormularioButton>Criar card</FormularioButton>
      </FormularioForm>
    </FormularioContainer>
  );
};

export default Formulario;
