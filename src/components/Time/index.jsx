import Card from "../Card";

import { DivCards, DivTime, InputColor } from "./styles";

const Time = ({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
  aoDeletar,
  atualizaCor,
  aoFavoritar
  
}) => {
  const handleChange = (e) => {
    const novaCor = e.target.value;
    atualizaCor(nome, novaCor);
  };

  return (
    colaboradores.length > 0 && (
      <DivTime style={{ backgroundColor: corSecundaria }}>
        <InputColor type="color" onChange={handleChange} value={corSecundaria} />
        <h2 style={{ borderColor: corPrimaria }}>{nome}</h2>
        <DivCards>
          {colaboradores.map((colaborador) => (
            <Card
              favorito={colaborador.favorito}
              id={colaborador.id}
              key={colaborador.id}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              time={colaborador.time}
              corDeFundo={corPrimaria}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </DivCards>
      </DivTime>
    )
  );
};

export default Time;
