import {
    LoginRegisterPageFormDiv,
    TitlesTextDiv,
    TitlesTextWelcomeH2,
    TitlesTextFacaLoginH1,
    RegisterFormDiv,
    EmailFormH2,
    EmailFormInput,
    PasswordFormH2,
    PasswordFormInput,
    RepeatPasswordFormH2,
    RepeatPasswordFormInput,
    LoginButtonDiv,
    LoginButtonButton
} from './style';

export function FormRegister() {
    return (
        <LoginRegisterPageFormDiv>
            <TitlesTextDiv>
                <TitlesTextWelcomeH2>Bem vindo!</TitlesTextWelcomeH2>
                <TitlesTextFacaLoginH1>Faça seu cadastro</TitlesTextFacaLoginH1>
            </TitlesTextDiv>
            <RegisterFormDiv>
                <EmailFormH2>E-mail</EmailFormH2>
                <EmailFormInput type="email" placeholder="examplo@exemplo.com" />
                <PasswordFormH2>Senha</PasswordFormH2>
                <PasswordFormInput type="password" placeholder="Coloque uma senha" />
                <RepeatPasswordFormH2>Repita a senha</RepeatPasswordFormH2>
                <RepeatPasswordFormInput type="password" placeholder="Repita a senha"></RepeatPasswordFormInput>
            </RegisterFormDiv>
            <LoginButtonDiv>
                <LoginButtonButton>Entrar</LoginButtonButton>
            </LoginButtonDiv>
        </LoginRegisterPageFormDiv>
    );
}