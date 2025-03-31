import styled from "styled-components";

const CardDiv = styled.div`
  width: 280px;
 
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: inline-block;
`;

const CabecalhoDiv = styled.div`
  height: 100px;
  border-radius: 10px 10px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;

const Img = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const RodapeDiv = styled.div`
  padding: 20px;
  background: #ffffff;
  border-radius: 0 0 10px 10px;
  text-align: center;
  

  h4 {
    color: #6278f7;
    font-size: 18px;
    margin: 0;
  }

  h5 {
    color: #212121;
    font-size: 16px;
    margin: 8px 0;
  }
`;

export { CardDiv, CabecalhoDiv, Img, RodapeDiv };
