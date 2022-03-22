import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #ffff;
  overflow: hidden;
`;
export const ListArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 72px;
  overflow: scroll;
  height: 100%;
  margin-bottom: 300px;

  @media (max-width: 800px) {
    margin-top: 50px;
  }
`;

export const MyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 15px;
  border-bottom: 2px solid #c4c4c4;
  width: 100%;
  height: 70px;
  /* border-color:red; */
  position: fixed;
  top: 0;

  h2 {
    font-size: 25px;
  }

  @media (max-width: 800px) {
    height: 50px;

    h2 {
      font-size: 20px;
    }
  }

  hr {
    background-color: red;
  }
`;

export const PurchaseArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  padding-bottom: 30px;
  width: 100%;
  border-top: 2px solid #c4c4c4;
  position: absolute;
  bottom: 0;

  .free-alert {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding: 5px;
    height: 60px;
    background: #c2f2a0;
    border-radius: 50px;
    width: 90%;
    overflow: hidden;

    p {
      font-weight: 500;
      margin-top: 5px;
      text-align: center;
      white-space: nowrap;
      color: #417406;
      font-size: 20px;
      width: 90%;

      @media (max-width: 800px) {
        font-size: 15px;
      }

    }

    @media (max-width: 800px) {
        width: 100%;
        height: 80px;
      }
  }

  /* height: 25vh; */

  .title-area {
    /* margin-top: 50px; */

    display: flex;
    padding: 30px;
    width: 100%;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #c4c4c4;

    .value-title {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      width: 100%;
    }
  }

  button {
    margin-top: 20px;
    width: 93%;
    font-weight: 600;
    font-size: 20px;
    padding: 15px;
  }
`;
