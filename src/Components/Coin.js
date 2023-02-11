import styled from "styled-components";
import Wrapper from "../HOC/Wrapper";
import { useNavigate } from "react-router";

const Image = styled.img`
        width: 2.5rem;
        height: 2.5rem;
        object-fit: cover;
`;
const CoinInfo = styled.td`
        font-size: 1.2rem;
        text-transform: capitalize;
        color: #ecf0f1;
        cursor: pointer;
`;
const Symbol = styled(CoinInfo)`
        text-transform: uppercase;
        color: #2ecc71;
`;
const MCCP = styled(CoinInfo)`
        color: ${(props) => (props.change > 0 ? "#2ecc71" : "#e74c3c")};
`;

const Coin = ({ coin }) => {
        const navigate = useNavigate();
        return (
                <Wrapper>
                        <CoinInfo>{coin.market_cap_rank}</CoinInfo>
                        <Image src={coin.image} alt="Coin Avatar" />
                        <CoinInfo onClick={() => navigate(`/CoinPage/${coin.id}`, { state: { coin } })}>{coin.id}</CoinInfo>
                        <Symbol>{coin.symbol}</Symbol>

                        <CoinInfo>{Number.parseFloat(coin.current_price).toFixed(2)}$</CoinInfo>
                        <MCCP change={coin.price_change_percentage_24h}>{Number.parseFloat(coin.price_change_percentage_24h).toFixed(2)}%</MCCP>
                </Wrapper>
        );
};

export default Coin;
