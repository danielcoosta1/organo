import styled from "styled-components";

const ContainerRodape = styled.footer`
  background-color: #6278f7; // Azul Alura
  background-image: url("../../assets/fundo.png");
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5%;
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Logo = styled.div``;

const RedesSociais = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
    order: 1;
  }
`;

const Img = styled.img`
  &.imgRedes {
    width: 15px;
  }

  @media (max-width: 768px) {
    max-width: 50%;
  }
`;

const Texto = styled.div`
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: .75rem;
  }
`;

export { ContainerRodape, RedesSociais, Texto, Logo, Img };
