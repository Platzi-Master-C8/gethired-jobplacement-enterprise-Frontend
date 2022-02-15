import styled, { keyframes } from 'styled-components';

const ldsRing = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Ldr = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #ae4eff;
        border-radius: 50%;
        animation: ${ldsRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #ae4eff transparent transparent transparent;
    }

    div:nth-child(1) {
        animation-delay: -0.45s;
    }

    div:nth-child(2) {
        animation-delay: -0.3s;
    }

    div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;
