import {
    LoginRegisterPageFormDiv,
    TitlesTextDiv,
    TitlesTextWelcomeH2,
    TitlesTextFacaLoginH1,
    LoginFormDiv,
    EmailFormH2,
    EmailFormInput,
    PasswordFormH2,
    PasswordFormInput,
    RememberForgotPasswordFormDiv,
    RememberAccountFormInput,
    RememberTextFormH4,
    ForgotTextFormH4,
    LoginButtonDiv,
    LoginButtonButton
} from './style';

export function FormLogin() {
    return (
        <LoginRegisterPageFormDiv>
            <TitlesTextDiv>
                <TitlesTextWelcomeH2>Bem vindo!</TitlesTextWelcomeH2>
                <TitlesTextFacaLoginH1>Faça login na sua conta</TitlesTextFacaLoginH1>
            </TitlesTextDiv>
            <LoginFormDiv>
                <EmailFormH2>E-mail</EmailFormH2>
                <EmailFormInput type="email" placeholder="examplo@exemplo.com" />
                <PasswordFormH2>Senha</PasswordFormH2>
                <PasswordFormInput type="password" placeholder="*************" />
            </LoginFormDiv>
            <RememberForgotPasswordFormDiv>
                <RememberAccountFormInput type="checkbox" />
                <RememberTextFormH4>Lembre de mim</RememberTextFormH4>
                <ForgotTextFormH4>Esqueceu sua senha?</ForgotTextFormH4>
            </RememberForgotPasswordFormDiv>
            <LoginButtonDiv>
                <LoginButtonButton>Entrar</LoginButtonButton>
            </LoginButtonDiv>
        </LoginRegisterPageFormDiv>
    );
}