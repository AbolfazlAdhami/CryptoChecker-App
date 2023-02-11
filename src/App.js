import React from "react";
import styled from "styled-components";
import Home from "./Components/Home";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CoinPage from "./Components/CoinPage";
const Main = styled.div`
        width: 100%;
        height: 100%;
        padding: 2rem 0;
        display: grid;
`;

function App() {
        return (
                <Main>
                        <Router>
                                <Routes>
                                        <Route path="/" exact element={<Home />} />
                                        <Route path="/CoinPage/:id" exact element={<CoinPage />} />
                                </Routes>
                        </Router>
                </Main>
        );
}

export default App;
