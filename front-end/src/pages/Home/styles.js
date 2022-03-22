import styled from "styled-components";

export const MyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100vh;
  background: #f1f1f1;

  overflow: hidden;
`;

export const OptionsArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  background: #f1f1f1;
  overflow: hidden;
  gap: 20px;
  animation-name: slidein;
  animation-duration: 2s;
  margin-top: 100px;

  @media(max-width:800px){
    margin-top: 80px;

  }

  @keyframes slidein {
    from {
      margin-top: 100%;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 480px;
    padding: 20px;
    font-size: 25px;
    font-weight: 600;
    border-radius: 10px;
    animation-name: slidein;
  animation-duration: 2s;

  @keyframes slidein {
    from {
      margin-top: 300px;
    }
  }


    .icon {
      margin-top: -5px;
    }
  }
`;
