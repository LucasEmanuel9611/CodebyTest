import styled from "styled-components";


export const Card = styled.div`
  display: flex;
  background: #fff;

  width: 100%;
  height: 140px;
  /* margin-top: 10px; */
  padding: 10px;
  gap: 23px;

  p,
  span {
    font-size: 18px;
  }

  span:nth-child(1) {
    /* margin-bottom: 20px; */
    color: #c4c4c4;
  }

  .title-area {
    display: flex;
    flex-direction: column;
    height: 100%;

    margin-top: 15px;
  }
  .price-area {
    margin-top: -5px;

    p,
    span {
      line-height: 15px;
    }
  }
  .name-item {
    font-weight: 600;
  }

  img {
    max-height: 100%;
    min-width: 120px;
    border: 2px solid #c4c4c4;
  }
`;