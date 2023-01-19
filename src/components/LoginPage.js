import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

export default function LoginPage() {
  return(
    <>
      <Body>
        <Logo />
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
      </Body>
    </>
  )
}

const Body = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`

const Form = styled.div`
  display: flex;
  margin: auto;
  flex-direction: column;
`;

const Label = styled.label`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
`;

const Input = styled.input`
  width: 315px;
  height: 45px;
  font-size: 16px;
  margin: 2px;
  padding-left: 15px;
  border-style: none;
  border-radius: 5px;

  ::placeholder {
    color: #010100;
  }
`

const Button = styled.button`
  margin: 15px auto 35px auto;
  align-items: center;
  width: 332px;
  height: 39px;
  font-size: 17px;
  font-weight: 600;
  color: #fefeff;
  background-color: #a328d6;
  border-radius: 5px;
  border-style: none;
`

const SignUp = styled.div`
  display: flex;
  margin: auto;

  p {
    font-size: 14px;
    font-weight: 600;
    color: #fefeff;
  }
`