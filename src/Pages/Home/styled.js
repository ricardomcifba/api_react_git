import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solif #ddd;
    height:1.2rem;
    padding: 0 .5rem;
    border-radius: .25 0 0 .25rem;

    &focus,
    &active {
        outline:none;
        box-shadow: none;
    } 
`;

export const Button = styled.button`
    height: 1.5rem;
    border: 1px solid #000;
    background: #000;
    color: #fff;
    border-radius: 0 .25 .25rem 0;
    &focus,
    &active {
        outline:none;
        box-shadow: none;
    } 
`;

export const ErrorMsg = styled.p`
    display: block;
    font-size: 0.85rem;
    color: red;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    margin-top: 1rem;
`;
