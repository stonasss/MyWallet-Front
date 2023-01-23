import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import logoff from "../assets/logoff.png";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../appContext/Token";

export default function HomePage() {
    const next = useNavigate();
    const [info, setInfo] = useState([]);
    const [totalFunds, setTotalFunds] = useState(0);
    const { token } = useContext(UserContext);
    const userToken = token;

    useEffect(() => {
        const header = { headers: { Authorization: `Bearer ${userToken}` } };

        axios
            .get(`${process.env.REACT_APP_API_URL}/transactions`, header)
            .then((res) => {
                setInfo(res.data);
                if (
                    info &&
                    info.wallet &&
                    Array.isArray(info.wallet) &&
                    info.wallet.length > 0
                ) {
                    calcFunds();
                }
            })
            .catch((err) => {
                console.log(err);
                alert("Algo deu errado");
                next("/");
            });
    }, [info, calcFunds, next, userToken]);

    function calcFunds() {
        let total = 0;

        info.wallet.map((item) =>
            item.type === "withdraw"
                ? (total -= parseFloat(item.value))
                : (total += parseFloat(item.value))
        );
        setTotalFunds(total.toFixed(2));
    }

    return (
        <>
            <Body>
                <NavBar>
                    <Greetings>Olá, {info.username}</Greetings>
                    <Link to="/">
                        <img alt="leave" src={logoff}></img>
                    </Link>
                </NavBar>

                <Mid>
                    <div style={{ overflow: "auto", height: "90%" }}>
                        {!info.wallet || info.wallet.length === 0 ? (
                            <Title>Não há registros de entrada ou saída</Title>
                        ) : (
                            info.wallet.map((entry, index) => (
                                <Listing key={index}>
                                    <h1>{entry.date}</h1>
                                    <h2>{entry.description}</h2>
                                    <div>
                                        <h3
                                            style={{
                                                color:
                                                    entry.type === "deposit"
                                                        ? "#17ad01"
                                                        : "#c71901",
                                            }}
                                        >
                                            {Number(entry.value).toFixed(2)}
                                        </h3>
                                    </div>
                                </Listing>
                            ))
                        )}
                    </div>

                    <Funds>
                        {!info.wallet || info.wallet.length === 0 ? (
                            <></>
                        ) : (
                            <div>
                                <h1>SALDO</h1>
                                <h2
                                    style={{
                                        color:
                                            totalFunds < 0
                                                ? "#c71901"
                                                : "#000000",
                                    }}
                                >
                                    {totalFunds}
                                </h2>
                            </div>
                        )}
                    </Funds>
                </Mid>

                <Footer>
                    <StyledLink to={"/nova-entrada"}>
                        <img alt="plus" src={plus}></img>
                        <p>Nova entrada</p>
                    </StyledLink>
                    <StyledLink to={"/nova-saida"}>
                        <img alt="minus" src={minus}></img>
                        <p>Nova saída</p>
                    </StyledLink>
                </Footer>
            </Body>
        </>
    );
}

const Body = styled.div`
    margin: 20px 20px 10px 20px;
`;

const NavBar = styled.header`
    display: flex;
    margin-bottom: 20px;
    justify-content: space-between;

    img {
        height: 90%;
    }
`;

const Greetings = styled.h1`
    font-size: 26px;
    font-weight: 600;
    color: #ffffff;
`;
const Mid = styled.div`
    position: relative;
    padding-bottom: 10px;
    width: 100%;
    height: 70vh;
    border: 1px solid #ffffff;
    border-radius: 5px;
    background-color: white;
    overflow: auto;
`;

const Title = styled.div`
    display: flex;
    height: 100%;
    width: 70%;
    margin: auto;
    text-align: center;
    font-size: 20px;
    color: #868686;
`;

const Footer = styled.footer`
    display: flex;
    margin: auto;
    padding-top: 15px;
    justify-content: space-between;
    height: 16vh;
`;

const StyledLink = styled(Link)`
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
        color: #ffffff;
        padding-left: 8px;
        position: absolute;
        bottom: 8px;
        right: 90px;
    }
`;
const Listing = styled.div`
    display: flex;
    font-size: 14px;
    margin-top: 30px;
    position: relative;

    h1 {
        position: absolute;
        left: 15px;
        color: #c6c6c6;
    }

    h2 {
        max-width: 54%;
        line-break: anywhere;
        position: absolute;
        left: 72px;
    }

    h3 {
        position: absolute;
        right: 15px;
    }
`;

const Funds = styled.footer`
    display: flex;

    h1 {
        position: absolute;
        left: 12px;
        bottom: 12px;
        font-weight: 700;
    }
    h2 {
        position: absolute;
        right: 12px;
        bottom: 12px;
    }
`;
