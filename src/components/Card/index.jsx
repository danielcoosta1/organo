import { CardDiv, CabecalhoDiv, Img, RodapeDiv } from "./styles";

const Card = ({ nome, cargo, imagem, corDeFundo }) => {
  return (
    <CardDiv>
      <CabecalhoDiv style={{ backgroundColor: corDeFundo }}>
        <Img src={imagem} alt={nome} />
      </CabecalhoDiv>
      <RodapeDiv>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </RodapeDiv>
    </CardDiv>
  );
};

export default Card;
