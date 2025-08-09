import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = styled.div`
    width: 100vw;
    display: flex;
`

export const Content = styled.div`
    width: 100vw;
    height: 560px;
    h1 {
        font-size: 62px;
        margin-bottom: 62px;
    }
    h2 {
        font-size: 32px;
        margin-bottom: 32px;
    }

    h3 {
        font-size: 18px;
        margin-bottom: 32px;
    }

    p {
        width: 300px;
        font-size: 11px;
        color: rgb(113, 118, 123);
        margin: 12px 0 62px 0;

        a {
            text-decoration: none;
            color: #1d9bf0;
        }
    };
`

export const CriarConta = styled.button`
    width: 300px;
    padding: 12px;
    color: #fff;
    background-color: #1d9bf0;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border-radius: 26px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #1a8cd8;
    }
`

export const Entrar = styled.button`
    width: 300px;
    padding: 12px;
    color: #1d9bf0;
    background-color: transparent;
    font-weight: bold;
    font-size: 16px;
    border: none;
    border: 1px solid #526370;
    border-radius: 26px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background-color: #031018;
    }
`
