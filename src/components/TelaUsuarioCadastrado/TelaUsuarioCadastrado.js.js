import { Div, Titulo } from "./styled";
import {BackToLoginButton} from "../TelaCadastro/styled"

function TelaUsuarioCadastrado(props) {
    return (
        <Div>
            <Titulo>Você concluiu o cadastro, parabéns!!!</Titulo>
            <BackToLoginButton onClick={() => props.irPara(1)}>Logout</BackToLoginButton>
        </Div>
    )
}

export default TelaUsuarioCadastrado;