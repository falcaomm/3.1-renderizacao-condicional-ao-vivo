import { useState } from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {

  const enviarLogin = () => {
    alert("E-mail não encontrado, será necessário fazer o cadastro!")
  }

  const [email, setEmail] = useState("")

  function funcaoEmail(e) {
    setEmail(e.target.value)
  }

  const [senha, setSenha] = useState("")

  function funcaoSenha(e) {
    setSenha(e.target.value)
  }

  const comfirmaCadastro = 
    email.includes('@') && senha.length > 0 ?
      () => props.irPara(4)
      : enviarLogin


  return (
    <FormContainer >
      <h1>LOGIN</h1>
      <Form>
        <StyledLabel>
          E-mail:
          <Input
            onChange={funcaoEmail}
            value={email}
          />
        </StyledLabel>

        <StyledLabel>
          Senha:
          <Input type={"password"}
            onChange={funcaoSenha}
            value={senha} />
        </StyledLabel>

        <SendButton onClick={comfirmaCadastro}>
          Entrar
        </SendButton>

        <RegisterButton onClick={() => props.irPara(2)}>
          Cadastre-se
        </RegisterButton>
        
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
