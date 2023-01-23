import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { UserContext } from "../appContext/Token.js";

export default function Deposit() {
    const next = useNavigate();
    const { token } = useContext(UserContext);
    const userToken = token;
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    function newDeposit(e) {
        const header = { headers: { Authorization: `Bearer ${userToken}` } };

        axios
            .post(
                `${process.env.REACT_APP_API_URL}/nova-entrada`,
                {
                    value: value,
                    description: description,
                },
                header
            )
            .then((res) => {
                console.log(res.data);
                next("/home");
            })
            .catch((err) => {
                console.log(err);
            });

        e.preventDefault();
    }

    return (
        <Body>
            <NavBar>
                <p>Nova entrada</p>
            </NavBar>

            <Form onSubmit={newDeposit}>
                <Label htmlFor="value">
                    <Input
                        placeholder="Valor"
                        type="text"
                        value={value}
                        onChange={(e) =>
                            setValue(e.currentTarget.value.replace(/,/g, "."))
                        }
                        required
                    ></Input>
                </Label>

                <Label htmlFor="desc">
                    <Input
                        placeholder="Descrição"
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.currentTarget.value)}
                        required
                    ></Input>
                </Label>

                <Button type="submit" id="submitbtn">
                    Salvar entrada
                </Button>
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
`;

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
`;
