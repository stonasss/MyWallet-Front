import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { UserContext } from "../appContext/Token";

export default function Withdraw() {
  const next = useNavigate();
  const { token } = useContext(UserContext);
  const userToken = token;
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");

  function newWithdraw(e){
    const header = { headers: { Authorization : `Bearer ${userToken}` } };

    axios.post(`${process.env.REACT_APP_API_URL}/nova-saida`, {
      value: value,
      description: description
    },
      header
    ).then(res => {
      console.log(res.data)
      next("/home")
    }).catch(err => {
      console.log(err)
    });

    e.preventDefault()
  };

  return (
    <Body>
      <NavBar>
        <p>Nova saída</p>
      </NavBar>

      <Form onSubmit={newWithdraw}>
        <Label htmlFor="value">
          <Input 
            placeholder="Valor" 
            type="text" 
            value={value}
            onChange={(e) => setValue(e.currentTarget.value)}
            required></Input>
        </Label>

        <Label htmlFor="description">
          <Input 
            placeholder="Descrição" 
            type="text" 
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            required></Input>
        </Label>

        <Button type="submit" id="submitbtn">Salvar saída</Button>
      </Form>

      
    </Body>
  );
}

const Body = styled.div`
  margin: 20px 20px 10px 20px;
`;

const NavBar = styled.header`
  display: flex;
  margin-bottom: 40px;
  justify-content: space-between;

  p {
    color: #ffffff;
    font-size: 26px;
    font-weight: 600;
  }
`;

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