import React from "react";
import { MyContainer, OptionsArea } from "./styles.js";
import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
  return (
    <MyContainer>
      <OptionsArea>
        <button className="btn btn-primary" onClick={() => navigate('/maiores')}>
          Compra Maior que R$ 10,00
          <BsCart2 color="#fff" size={40} className="icon" />
        </button>
        <button className="btn btn-primary" onClick={() => navigate('/menores')}>
          Compra Menor que R$ 10,00{" "}
          <BsCart2 color="#fff" size={40} className="icon" />
        </button>
      </OptionsArea>
    </MyContainer>
  );
}
