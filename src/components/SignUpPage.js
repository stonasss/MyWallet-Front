import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";
import axios from "axios";

export default function SignUpPage() {
  const next = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function signUp(e){
    axios.post(`${process.env.REACT_APP_API_URL}/cadastro`, {
      username,
      email,
      password,
      confirmPassword
    }).then(res => {
      console.log(res.data)
      next("/")
    }).catch(err => {
      console.log(err)
    });

    e.preventDefault()
  }

  return (
    <>
      <Body>
        <Logo />

        <Form>
          <Label htmlFor="name">
            <Input 
              placeholder="Nome"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.currentTarget.value)}
              required>
            </Input>
          </Label>

          <Label htmlFor="email">
            <Input 
              placeholder="E-mail" 
              type="text"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required>
            </Input>
          </Label>

          <Label htmlFor="password">
            <Input 
              placeholder="Senha" 
              type="text"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required>
            </Input>
          </Label>

          <Label htmlFor="confirmPassword">
            <Input 
              placeholder="Confirme a senha" 
              type="text"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.currentTarget.value)}
              required>
            </Input>
          </Label>
        </Form>

        <Button onClick={signUp}>Cadastrar</Button>

        <SignIn><p>Já tem uma conta? Entre agora!</p></SignIn>

      </Body>
    </>
  );
}

const Body = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

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

const SignIn = styled.div`
  display: flex;
  margin: auto;

  p {
    font-size: 14px;
    font-weight: 600;
    color: #fefeff;
  }
`