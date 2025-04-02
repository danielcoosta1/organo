import { CardDiv, CabecalhoDiv, Img, RodapeDiv, BotaoDeletar } from "./styles";
import avatar from "../../assets/avatar-padrao.webp";
import { FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const Card = ({ nome, cargo, imagem, corDeFundo, time, id, aoDeletar }) => {
  return (
    <CardDiv>
      <BotaoDeletar onClick={() => aoDeletar(id)}>
        <FaTrashAlt size={20} />
      </BotaoDeletar>
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
