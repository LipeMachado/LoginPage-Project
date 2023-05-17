import styled from "styled-components";

export const LoginPageContainerDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;

    @media screen and (max-width: 990px) {
        grid-template-columns: 1fr;
    }
`;

export const LoginPageImageDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--white-200);
    
    @media screen and (max-width: 990px) {
        display: none;
    }
`;

export const LoginRegisterPageFormContainerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RegisterAccountPageFormDiv = styled.div`
    position: absolute;
    bottom: 50px;
`;

export const RegisterAccountPageFormTextH4 = styled.h4`
    font-family: var(--font-lato);
    font-weight: 400;
    font-size: 16px;
    color: var(--gray);
    cursor: default;

    a {
        text-decoration: none;
        color: var(--purple-light);
        cursor: pointer;
    }
`;