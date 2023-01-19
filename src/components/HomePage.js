import React from "react";
import styled from "styled-components";
import logoff from "../assets/logoff.png";
import add from "../assets/add-circle-outline.svg"
import remove from "../assets/remove-circle-outline.svg"

export default function HomePage() {
    return (
        <>
        <Body>
            <NavBar>
                <Greetings>Olá, Fulano</Greetings>
                <img alt="leave" src={logoff}></img>
            </NavBar>

            <Mid>
                Não há registros 
            </Mid>

            <Footer>
                <LeftBtn>
                    <img alt="plus" src={add}></img>
                    <p>Nova entrada</p>
                </LeftBtn>
                <RightBtn>
                    <img alt="minus" src={remove}></img>
                    <p>Nova saída</p>
                </RightBtn>
            </Footer>
        </Body>
        </>
    )
}

const Body = styled.div`
    margin: 20px 20px 10px 20px; 
`

const NavBar = styled.header`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;

    img {
        height: 90%;
    }
`

const Greetings = styled.h1`
    font-size: 26px;
    font-weight: 600;
    color: #FFFFFF;
`
const Mid = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    height: 70vh;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    background-color: white;
`

const Footer = styled.footer`
    display: flex;
    margin: auto;
    padding-top: 15px;
    justify-content: space-between;
    height: 16vh;
`

const LeftBtn = styled.button`
    position: relative;
    border: none;
    border-radius: 5px;
    width: 48%;
    background-color: #a328d6;

    img {
        position: absolute;
        top: 8px;
        right: 128px;
        padding-left: 4px;
    }

    p {
        text-align: justify;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        color: #FFFFFF;
        padding-left: 8px;
        position: absolute;
        bottom: 8px;
        right: 90px;
    }
`
const RightBtn = styled.button`
    position: relative;
    border: none;
    border-radius: 5px;
    width: 48%;
    background-color: #a328d6;

    img {
        position: absolute;
        top: 8px;
        right: 128px;
        padding-left: 4px;
    }

    p {
        text-align: justify;
        font-size: 16px;
        font-weight: 600;
        line-height: 19px;
        color: #FFFFFF;
        padding-left: 8px;
        position: absolute;
        bottom: 8px;
        right: 90px;
    }
`