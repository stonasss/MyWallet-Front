import React from "react";
import styled from "styled-components";

export default function Withdraw() {
  return (
    <Body>
      <NavBar>
        <p>Nova saída</p>
      </NavBar>

      <Form>
        <Label htmlFor="value">
          <Input 
            placeholder="Valor" 
            type="text" 
            required></Input>
        </Label>

        <Label htmlFor="desc">
          <Input 
            placeholder="Descrição" 
            type="text" 
            required></Input>
        </Label>
      </Form>

      <Button>Salvar saída</Button>
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