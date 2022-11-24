import { Form, FormContainer, Input, StyledLabel, SendButton } from "./styled";

function TelaEndereco (props) {

    return (
        <FormContainer>
            <h1>Cadastro Endereço</h1>

            <Form>
                <StyledLabel htmlFor="endereco">
                    Endereço:
                    <Input id="endereco" />
                </StyledLabel>

                <StyledLabel htmlFor="numero">
                    Nº:
                    <Input
                        id="numero" 
                        type= {Number}
                    />
                </StyledLabel>

                <StyledLabel htmlFor="complemento">
                    Complemento:
                    <Input id="complemento" />
                </StyledLabel>

                <StyledLabel htmlFor="tel">
                    Telefone:
                    <Input
                        id="tel"
                        type={Number}
                    />
                </StyledLabel>

                <SendButton onClick={() => props.irPara(4)}>Cadastrar</SendButton>
            </Form>
    
        </FormContainer>
    );
}

export default TelaEndereco;
