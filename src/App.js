import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaEndereco from "./components/TelaEndereco/TelaEndereco"

import TelaUsuarioCadastrado from "./components/TelaUsuarioCadastrado/TelaUsuarioCadastrado.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`
const MainContainer = styled.main`
  height: 100vh;
`

function App() {

  const [mudaTela, setMudaTela] = useState(1)

  function irPara(parametro) {
    setMudaTela(parametro)
  }

  // const mudarPag = mudaTela === 1 ? <TelaLogin /> : <TelaCadastro />
  // dessa forma eu criei uma variavel e botei o ternario nela depois dentro do return é só chamar a variavel, mas da pra criar tmb o ternario direto dentro do return botando entre chaves

  // return (
  //   <MainContainer >
  //     <GlobalStyled />
  //     {/* {mudarPag} */}
  //     {mudaTela === 1 ?
  //       <TelaLogin irPara={irPara} />
  //       :
  //       <TelaCadastro irPara={irPara} />}
  //   </MainContainer>
  // )

  switch (mudaTela) {
    case 1:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaLogin
            irPara={irPara}
          />
        </MainContainer>
      );
    case 2:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaCadastro
            irPara={irPara}
          />
        </MainContainer>
      );
    case 3:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaEndereco
            irPara={irPara}
          />
        </MainContainer>
      );
    case 4:
      return (
        <MainContainer >
          <GlobalStyled />
          <TelaUsuarioCadastrado 
            irPara={irPara}
          />
        </MainContainer>
      );
    default:
      return "Pagina não encontrada"
  }

  // if (mudaTela === 1) {
  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaLogin 
  //         irPara={irPara}
  //       />
  //     </MainContainer>
  //   );
  // }
  
  // else if (mudaTela === 2) {
  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaCadastro 
  //         irPara={irPara}
  //       />
  //     </MainContainer>
  //   );
  // }

  // else {
  //   return (
  //     <MainContainer >
  //       <GlobalStyled />
  //       <TelaUsuarioCadastrado />
  //     </MainContainer>
  //   );
  // }

  //com os ifs sempre são varios returns 
  
}

export default App;