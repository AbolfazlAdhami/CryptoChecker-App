import React from "react";

import Wrapper from "../HOC/Wrapper";
import { useLocation } from "react-router";
import styled from "styled-components";

const Container = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
`;
const Avatar = styled.img`
        width: 25%;
        height: 20rem;
        object-fit: contain;
        object-postion: center center;
`;
const BoxInfo = styled.div`
        width: 70%;
        height: 50%;
        display: flex;
        flex-direction: column;
`;
const InfoTag = styled.p`
        color: #ecf0f1;
        font-size: 1.2rem;
        font-weight: 600;
        text-transform: capitalize;
        padding: 0.5rem;
        letter-spacing: 0.1rem;
`;
const InfoSymbol = styled(InfoTag)`
        text-transform: uppercase;
`;
const InfoPriceCh = styled(InfoTag)`
        color: ${(props) => (props.change > 0 ? "#2ecc71" : "#e74c3c")};
        display: inline;
`;
const CoinPage = () => {
        const { state } = useLocation();
        const coin = { ...state.coin };
        console.log();
        return (
                <Wrapper>
                        <Container>
                                <Avatar src={coin.image} />
                                <BoxInfo>
                                        <InfoTag>Name : {coin.id}</InfoTag>
                                        <InfoTag>Market Cap Rank : {coin.market_cap_rank}</InfoTag>
                                        <InfoSymbol>Symbol : {coin.symbol}</InfoSymbol>
                                        <InfoTag>Current Price : {coin.current_price}$</InfoTag>
                                        <InfoTag>Highest Price last 24H : {coin.high_24h}$</InfoTag>
                                        <InfoTag>Lowest Price last 24H : {coin.high_24h}$</InfoTag>
                                        <InfoTag>
                                                Price Change Percentage 24h :<InfoPriceCh change={coin.price_change_percentage_24h}>{coin.price_change_percentage_24h}%</InfoPriceCh>
                                        </InfoTag>
                                        <InfoTag>
                                                Market Cap Change Percentage 24h : <InfoPriceCh change={coin.market_cap_change_percentage_24h}>{coin.market_cap_change_percentage_24h}%</InfoPriceCh>
                                        </InfoTag>
                                        <InfoTag>Last Update: {coin.last_updated.slice(0, 10)}</InfoTag>
                                </BoxInfo>
                        </Container>
                </Wrapper>
        );
};

export default CoinPage;
