import React from "react";
import styled from "styled-components";

export default function Logo(){
    return (
        <Title>
            MyWallet
        </Title>
    )
}

const Title = styled.header`
  font-family: "Saira Stencil One";
  padding: 15px;
  text-align: center;
  font-size: 40px;
  color: #fefeff;
`;