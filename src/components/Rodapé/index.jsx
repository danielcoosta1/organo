import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";
import tw from "../../assets/tw.png";
import logo from "../../assets/logo.png";

import { ContainerRodape, RedesSociais, Texto, Logo, Img } from "./styles";

const Rodape = () => {
  return (
    <ContainerRodape>
      <RedesSociais>
        <Img src={fb} className="imgRedes" />
        <Img src={tw} className="imgRedes" />
        <Img src={ig} className="imgRedes" />
      </RedesSociais>
      <Logo>
        <Img src={logo} />
      </Logo>

      <Texto>Desenvolvido por alura</Texto>
    </ContainerRodape>
  );
};

export default Rodape;
