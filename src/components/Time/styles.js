import styled from "styled-components";

const DivTime = styled.div`
  text-align: center;
  padding: 32px;
  margin: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  

  h2 {
    font-size: 24px;
    border-bottom: 3px solid;
    display: inline-block;
    padding-bottom: 8px;
  }
`;

const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

export { DivCards, DivTime };
