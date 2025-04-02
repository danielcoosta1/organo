import Card from "../Card";

import { useState, useEffect } from "react";
import { DivCards, DivTime, InputColor } from "./styles";

const Time = ({
  nome,
  corPrimaria,
  corSecundaria,
  colaboradores,
  aoDeletar,
}) => {
  const [corDeFundo, setCorDeFundo] = useState(corSecundaria);

  useEffect(() => {
    setCorDeFundo(corSecundaria);
  }, [corSecundaria]);

  const handleChange = (e) => {
    const corAtual = e.target.value;
    setCorDeFundo(corAtual);
  };

  return (
    colaboradores.length > 0 && (
      <DivTime style={{ backgroundColor: corDeFundo }}>
        <InputColor type="color" onChange={handleChange} value={corDeFundo} />
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
