import Card from "../Card";
import { DivCards, DivTime } from "./styles";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores,  }) => {
    return (
      <DivTime style={{ backgroundColor: corSecundaria }}>
        <h2 style={{ borderColor: corPrimaria }}>{nome}</h2>
        <DivCards>
          {colaboradores.map(colaborador => (
            <Card
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              time={colaborador.time}
              corDeFundo={corPrimaria}
            />
          ))}
        </DivCards>
      </DivTime>
    );
  };
  
  export default Time;