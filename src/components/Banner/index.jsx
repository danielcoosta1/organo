import BannerImg from "../../assets/banner.png";
import { Header, Img } from "./styles.js";


function Banner() {
  return (
    <Header>
      <Img src={BannerImg} alt="Banner" />
    </Header>
  );
}

export default Banner;
