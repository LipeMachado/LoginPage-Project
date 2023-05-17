import styled from "styled-components";

export const LoginRegisterPageFormDiv = styled.div`
    display: block;
    color: var(--gray);
`;

export const TitlesTextDiv = styled.div`
    margin-bottom: 39px;
`;

export const TitlesTextWelcomeH2 = styled.h2`
    font-family: var(--font-merri);
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 7px;
    color: var(--gray);
`;

export const TitlesTextFacaLoginH1 = styled.h1`
    font-family: var(--font-merri);
    font-weight: 700;
    font-size: 26px;
    color: var(--gray);

    @media screen and (max-width: 990px) {
        font-size: 20px;
    }
`;

export const LoginFormDiv = styled.div`
    display: block;
`;

export const EmailFormH2 = styled.div`
    font-family: var(--font-lato);
    font-size: 16px;
    font-weight: 400;
    color: var(--gray);
    margin-bottom: 11px;
`;

export const EmailFormInput = styled.input`
    width: 95%;
    padding: 17px;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    font-family: var(--font-lato);
    font-size: 16px;
    font-weight: 400;
    color: var(--gray);
    margin-bottom: 11px;

    @media screen and (max-width: 990px) {
        width: 88%;
    }
`;

export const PasswordFormH2 = styled.h2`
    font-family: var(--font-lato);
    font-size: 16px;
    font-weight: 400;
    color: var(--gray);
    margin-bottom: 11px;
`;

export const PasswordFormInput = styled.input`
    width: 95%;
    padding: 17px;
    border: 1px solid var(--gray-border);
    border-radius: 5px;
    font-family: var(--font-lato);
    font-size: 16px;
    font-weight: 400;
    color: var(--gray);
    margin-bottom: 29px;

    @media screen and (max-width: 990px) {
        width: 88%;
    }
`;

export const RememberForgotPasswordFormDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 105%;
    margin-bottom: 26px;

    @media screen and (max-width: 990px) {
        width: 95%;
    }
`;

export const RememberAccountFormInput = styled.input`
    cursor: pointer;
`;

export const RememberTextFormH4 = styled.h4`
    font-family: var(--font-lato);
    font-weight: 400;
    font-size: 14px;
    color: var(--gray);
    margin-left: 11px;
`;

export const ForgotTextFormH4 = styled.h4`
    font-family: var(--font-lato);
    font-weight: 400;
    font-size: 14px;
    color: var(--gray);
    position: absolute;
    right: 0;
    cursor: pointer;
`;

export const LoginButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 105%;

    @media screen and (max-width: 990px) {
        width: auto;
    }
`;

export const LoginButtonButton = styled.button`
    padding: 15px 152px;
    color: var(--white);
    font-family: var(--font-lato);
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    border: transparent;
    border-radius: 5px;
    background-color: var(--green-light);

    @media screen and (max-width: 990px) {
        padding: 15px 120px;
    }
`;
