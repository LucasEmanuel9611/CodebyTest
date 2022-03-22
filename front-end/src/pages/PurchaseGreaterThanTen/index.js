import React from "react";
import { StyledContainer, ListArea, MyHeader, PurchaseArea } from "./styles.js";
import { Button } from "react-bootstrap";
import CardItem from "../../components/CardItem";
import Modal from "react-modal";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"

export default function PurchaseGreaterThanTen() {
  const navigate = useNavigate();
  const [openModalCompra, setOpenModalCompra] = React.useState(false);

  const [doces, setDoces] = React.useState();

  function finalizarCompra() {
    setOpenModalCompra(!openModalCompra);
    setTimeout(() => {
      navigate("/");
    }, 1500);
  }

  function formatValue(num) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num / 100);
  }

  React.useEffect(() => {
    api.get("/greatherThanTen").then(e => setDoces(e.data))
  },[])
  return (
    <>
    {doces ? (
    <>
    <StyledContainer>
        <MyHeader>
          <h2>Meu Carrinho</h2>
          <hr />
        </MyHeader>
        <ListArea>
          {doces.items.map((item) => (
            <CardItem item={item} />
          ))}
        </ListArea>
        <PurchaseArea>
          <div className="title-area">
            <div className="value-title">
              <h2>Total</h2>
              <h2>{formatValue(doces.totalizers[0].value)}</h2>
            </div>
            <div className="free-alert">
              <p>Parabéns, sua compra tem frete grátis!</p>
            </div>
          </div>

          <button className="btn btn-primary" onClick={() => finalizarCompra()}>
            Finalizar compra
          </button>
        </PurchaseArea>
      </StyledContainer>
      <Modal
        isOpen={openModalCompra}
        onRequestClose={() => setOpenModalCompra(!openModalCompra)}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            // background: 'red',
          }}
        >
          <AiOutlineCheckCircle size={150} color="#3CFA5B" />

          <h5
            style={{
              width: "90%",
              textAlign: "center",
              marginTop: 80,
              fontSize: 30,
            }}
          >
            Pedido Realizado com Sucesso
          </h5>
        </div>
      </Modal>
      </>
      ) : null}
    </>
  );
}
