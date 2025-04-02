import { CardDiv, CabecalhoDiv, Img, RodapeDiv } from "./styles";
import avatar from "../../assets/avatar-padrao.webp";

import PropTypes from "prop-types";

const Card = ({ nome, cargo, imagem, corDeFundo, time }) => {
  return (
    <CardDiv>
      <CabecalhoDiv style={{ backgroundColor: corDeFundo }}>
        <Img
          src={imagem || avatar}
          alt={`Foto de ${nome}, ${cargo} no time ${time}`}
          onError={(e) => {
            e.target.src = avatar; // Se a imagem falhar
          }}
        />
      </CabecalhoDiv>
      <RodapeDiv>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </RodapeDiv>
    </CardDiv>
  );
};
Card.propTypes = {
  nome: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  imagem: PropTypes.string,
  time: PropTypes.string.isRequired,
};

Card.defaultProps = {
  imagem: avatar,
};

export default Card;
