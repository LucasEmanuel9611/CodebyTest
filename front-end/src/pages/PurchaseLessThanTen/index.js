import React from "react";
import api from "../../services/api";
import Modal from "react-modal";
import { StyledContainer, ListArea, MyHeader, PurchaseArea } from "./styles.js";
import { AiOutlineCheckCircle } from "react-icons/ai";
import CardItem from "../../components/CardItem";
import { useNavigate } from "react-router-dom";
   
export default function PurchaseLessThanTen() {
  const navigate = useNavigate()

  const [doces, setDoces] = React.useState();

  const [openModalCompra, setOpenModalCompra] = React.useState(false);
  // React.useEffect(async () => {
  //   await api.get('/notes').then(e => {
  //     console.log(e.data)
  //   })
  // })

  function formatValue(num) {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(num / 100);
  }

  function finalizarCompra(){
    setOpenModalCompra(!openModalCompra)
    setTimeout(() => {
      navigate("/")
    }, 1500)
  }

  React.useEffect(() => {
    api.get("/LessThanTen").then(e => setDoces(e.data))
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
            <CardItem item={item} key={item.id}/>
          ))}
        </ListArea>
        <PurchaseArea>
          <div className="title-area">
            <h2>Total</h2>
            <h2>{formatValue(doces.totalizers[0].value)}</h2>
          </div>
          <button
            onClick={() => finalizarCompra()}
            className="btn btn-primary"
          >
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
        <AiOutlineCheckCircle size={150} color="#3CFA5B"/> 

          <h5
            style={{
              width: "90%",
              textAlign: "center",
              marginTop: 80,
              fontSize: 30
            }}
          >
           Pedido Realizado com Sucesso
          </h5>
        </div>
      </Modal>
      </>) : null}
    </>
  );
}
