import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
    }

    html{ 
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }
        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
        //caso o usuario use uma fonte maior no celular dele o nosso valor 
        //irá se adaptar
    }

    //rem - 1rem --> tamanho da fonte da aplicação 

    body { 
        background: var(--background);
        -webkit-font-smoothing: antialiased;

    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button { 
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-overlay{
      background: rgba(0, 0, 0, 0.5);

      position: fixed;//sempre ficara em cima da tela
      top:0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: center;
  } 


   .react-modal-content{
       transition: 0.2s;
       max-width: 90%;
       width: 576px;
       background: #fff;
       padding: 3rem;
       position: relative;
       border-radius: 0.24rem;   
       display: flex;
       overflow: hidden;
   }

   .react-modal-infos{
      background: rgba(0, 0, 0, 0.5);
      max-width: 90%;
       width: 576px;
       background: #fff;
       transition: 0.2s;
       padding: 2rem;


       position: relative;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      border-radius: 0.24rem;   
        overflow: hidden;

  }  
  .react-modal-checagem{
      background: rgba(0, 0, 0, 0.5);
      max-width: 90%;
       width: 576px;
       background: #fff;
       transition: 0.2s;
       padding: 3rem;


       position: relative;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      border-radius: 0.24rem;   
        overflow: hidden;

  }  

   .react-modal-close{
       position: absolute;
       right: 1.5rem;
       top: 1.5rem;
       border: 0;
       background: transparent;  

        transition: 0.2s;

       &:hover{
           filter: brightness(0.7);

       }
   }

   .react-modal-infos{
    background: rgba(0, 0, 0, 0.5);
      max-width: 90%;
       width: 576px;
       background: #fff;
       transition: 0.2s;
       padding: 2rem 1rem 1rem 1rem;


       position: relative;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      flex-direction: column;
      border-radius: 0.24rem;   
        overflow: hidden;
        /* background-color: red; */

   }
   
`;
