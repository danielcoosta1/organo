import Banner from "./components/Banner/index";
import Formulario from "./components/Formulário";
import Rodape from "./components/Rodapé";
import Time from "./components/Time";

import { TimeConteiner, Titulo } from "./Styles";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [colaboradores, setColaboradores] = useState([]);
  const [times, setTimes] = useState([
    // ✅ Estado gerenciado
    {
      id: uuidv4(),
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      id: uuidv4(),
      nome: "DevOps",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
  ]);

  const aoNovoTimeAdicionado = (novoTime) => {
    if (times.some((time) => time.nome === novoTime.nome)) {
      alert("Já existe um time com esse nome!");
      return;
    }
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  };

  const atualizarCorTime = (nomeTime, novaCor) => {
    setTimes(
      times.map((time) =>
        time.nome === nomeTime ? { ...time, corSecundaria: novaCor } : time
      )
    );
  };

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, id: uuidv4(), favorito: false }]);
  };

  const deletarColaborador = (id) => {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  };

  const toggleFavorito=(id) =>{
    setColaboradores(colaboradores.map(colaborador=>
      colaborador.id === id
      ? {...colaborador, favorito: !colaborador.favorito}
      : colaborador
    ));
  }

  return (
    <div>
      <Banner />
      <Formulario
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        times={times}
        aoTimeCadastrado={aoNovoTimeAdicionado}
        // Passa apenas os nomes dos times
      />
      <Titulo>
        <h1>Minha Organização</h1>
      </Titulo>
      <TimeConteiner>
        {times.map((time) => (
          <Time
            id={time.id}
            key={time.nome}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            colaboradores={colaboradores.filter(
              (col) => col.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            atualizaCor={atualizarCorTime}
            aoFavoritar={toggleFavorito}
          />
        ))}
      </TimeConteiner>
      <Rodape />
    </div>
  );
};

export default App;
