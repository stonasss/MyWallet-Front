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
  padding: 15px;
  text-align: center;
  font-size: 40px;
  color: #fefeff;
`;