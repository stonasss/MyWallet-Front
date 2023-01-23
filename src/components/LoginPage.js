import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import axios from "axios";
import { UserContext } from "../appContext/Token";

export default function LoginPage() {
  const next = useNavigate();
  const { setToken } = useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function LogIn(e){
    const promise = axios.post(`${process.env.REACT_APP_API_URL}/`, {
      email: email,
      password: password
    })
    promise.then(res => {
      console.log(res.data)
      setToken(res.data)
      next("/home")
    });
    promise.catch(err => {
      console.log(err)
    });

    e.preventDefault()
  } 

  return (
    <>
      <Body>
        <Logo />
        <Form onSubmit={LogIn}>
          <Label htmlFor="email">
            <Input 
              placeholder="E-mail"
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
              required>
            </Input>
          </Label>

          <Label htmlFor="password">
            <Input 
              placeholder="Senha" 
              id="password"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
              required>
            </Input>
          </Label>

          <Button type="submit" id="submitbtn">Entrar</Button>
        </Form>

        <SignUp><p>Primeira vez? <StyledLink to={"/cadastro"}>Cadastre-se!</StyledLink></p></SignUp>
      </Body>
    </>
  )
}

const Body = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`

const Form = styled.form`
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

const StyledLink = styled(Link)`
  color: #fefeff;

&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
  }
`