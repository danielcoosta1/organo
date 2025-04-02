import Card from "../Card";


import { DivCards, DivTime } from "./styles";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, aoDeletar }) => {
  return (
    colaboradores.length > 0 && (
      <DivTime style={{ backgroundColor: corSecundaria }}>
        <h2 style={{ borderColor: corPrimaria }}>{nome}</h2>
        <DivCards>
          {colaboradores.map((colaborador) => (
            <Card
              id={colaborador.id}
              key={colaborador.id}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              time={colaborador.time}
              corDeFundo={corPrimaria}
              aoDeletar={aoDeletar}
            />
          ))}
        </DivCards>
      </DivTime>
    )
  );
};









export default Time;
