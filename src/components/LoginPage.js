import React from "react";
import styled from "styled-components";

export default function LoginPage() {
  return(
    <>
      <Logo>My Wallet</Logo>
      <Form>
        <Label htmlFor="email">
          <Input 
            placeholder="E-mail"
            type="text"
            required>
          </Input>
        </Label>

        <Label htmlFor="password">
          <Input 
            placeholder="Senha" 
            type="text"
            required>
          </Input>
        </Label>
      </Form>
      <Button>Entrar</Button>
      <SignUp><p>Primeira vez? Cadastre-se!</p></SignUp>
    </>
  )
}

const Logo = styled.header`
  display: flex;
  text-align: center;
  font-size: 26px;
  color: #fefeff;
`;

const Form = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
  margin: 5px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  height: 45px;
  font-size: 16px;
  margin: 2px;
  border-style: none;
  border-radius: 5px;
`

const Button = styled.button`
  align-items: center;
  width: 200px;
  height: 35px;
  color: #fefeff;
  background-color: #a328d6;
  border-radius: 5px;
  border-style: none;
`

const SignUp = styled.div`
  display: flex;
  margin: auto;

  p {
    font-size: 20px;
    color: #fefeff;
  }
`