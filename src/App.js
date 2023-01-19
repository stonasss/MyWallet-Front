import React from "react";
import styled from "styled-components";
import MainPage from "./components/MainPage";

export default function App() {
  return (
    <Screen>
      <MainPage />
    </Screen>
  )
}

const Screen = styled.div`
  background-color: #8d10bf;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;