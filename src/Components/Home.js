import React, { useEffect, useState } from "react";
import Wrapper from "../HOC/Wrapper";
import styled from "styled-components";
import Coin from "./Coin";
import { Bars } from "react-loader-spinner";
import axios from "axios";

const Title = styled.h2`
        font-size: 2rem;
        color: #2ecc71;
        padding: 1rem 0;
        border-bottom: 2px solid #fff;
        text-align: center;
`;
const Container = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
`;
const Table = styled.table`
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        aling-items: center;
        padding: 2rem 0;
`;
const TRow = styled.tr`
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
`;
const TData = styled.td`
        width: 100%;
        padding: 1.5rem 4%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
`;
const THead = styled.th`
        width: 100%;
        font-size: 1.2rem;
        color: #ecf0f1;
        display: flex;
        justify-content: space-between;
        text-transform: capitalize;
        padding: 1.5rem 2.5%;
`;
const Diveder = styled.div`
        width: 96%;
        height: 0.2rem;
        background-color: #2ecc71;
        margin-left: 2%;
        background-color: ${(props) => ((props.index + 1) % 2 === 0 ? "#2ecc71" : "#ecf0f1")};
`;
const RowCoin = styled(TRow)`
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
`;
const Loader = () => {
        return (
                <Bars
                        height="150"
                        width="150"
                        color="#2ecc71"
                        ariaLabel="bars-loading"
                        wrapperStyle={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10rem" }}
                        wrapperClass=""
                        visible={true}
                />
        );
};
const LoderStyle = styled(Loader)``;
const Home = () => {
        const [coins, setCoin] = useState([]);
        const [loader, setLoader] = useState(true);

        const fetchData = async () => {
                const { status, data } = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
                if (status == 200) {
                        setCoin([...data]);
                        setLoader(false);
                }
        };
        useEffect(() => {
                fetchData();
        }, []);
        return (
                <Wrapper>
                        <Container>
                                <Title>Welcome to the CryptoChecker</Title>
                                {loader ? (
                                        <Loader />
                                ) : (
                                        <Table>
                                                <TRow>
                                                        <THead>
                                                                <td>Market Cap Rank</td>
                                                                <td>Avatar</td>
                                                                <td>Name</td>
                                                                <td>Symbol</td>
                                                                <td>Current Price</td>
                                                                <td>mccp24h</td>
                                                        </THead>
                                                </TRow>
                                                <Diveder />
                                                <RowCoin>
                                                        {coins.map((coin, index) => (
                                                                <Wrapper key={index}>
                                                                        <TData>
                                                                                <Coin coin={coin} />
                                                                        </TData>
                                                                        <Diveder index />
                                                                </Wrapper>
                                                        ))}
                                                </RowCoin>
                                        </Table>
                                )}
                        </Container>
                </Wrapper>
        );
};

export default Home;
