import styled from "styled-components";


export const Body = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(36, 45, 52, 0.9); /* cor escura com transparência */
    z-index: 9999;
`;

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30vw;
    height: 64vh;
    background-color: #000;
    color: white;
    z-index: 10000;
    padding: 16px;
    border-radius: 12px;
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
`;

export const ModalHeader = styled.div`
    display: flex;
    opacity: 1;

    img {
        margin: auto;
    }

    .btn-fechar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 42px;
        height: 42px;
        border-radius: 50%;
        transition: background-color 0.3s ease;
        cursor: pointer;

        &:hover {
            background-color: #181919;
        }

        span {
            position: relative;
            width: 18px;
            height: 18px;

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #fff;
            transform-origin: center;
            transition: background-color 0.3s;
        }

        &::before {
            transform: rotate(45deg);
        }

        &::after {
            transform: rotate(-45deg);
        }
        }
    }
`

export const Content = styled.div`
    padding: 32px 62px;

    h1 {
        font-size: 32px;
    }

    form {
        input {
            width: 100%;
            margin: 16px 0;
            padding: 18px;
            font-size: 18px;
            background-color: transparent;
            border: none;
            border: 1px solid #fff;
            border-radius: 8px;
            color: #fff;

            &:focus {
                outline: 1px solid #1da1f2;
                box-shadow: 0 0 0 5px rgba(0, 123, 255, 0.5);
                outline-offset: 2px;
                border: none;
            }
        }
    }

    button {
        width: 100%;
        height: 62px;
        font-size: 18px;
        border: none;
        border-radius: 32px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s ease-in-out;

        &:hover {
            background-color: #d7dbdc;
        }
    }
`