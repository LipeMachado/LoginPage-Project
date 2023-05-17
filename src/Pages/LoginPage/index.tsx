import {
    LoginPageContainerDiv,
    LoginPageImageDiv,
    LoginRegisterPageFormContainerDiv,
    RegisterAccountPageFormDiv,
    RegisterAccountPageFormTextH4
} from './style.js';
import { Link } from 'react-router-dom';

import { FormLogin } from '../../Components/FormLogin/'

import { ImageLoginPage } from '../../Assets/ImageLoginPage';

export function LoginPage() {
    return (
        <LoginPageContainerDiv>
            <LoginPageImageDiv>
                <ImageLoginPage />
            </LoginPageImageDiv>
            <LoginRegisterPageFormContainerDiv>
                <FormLogin />
                <RegisterAccountPageFormDiv>
                    <RegisterAccountPageFormTextH4>
                        Não tem uma conta? <Link to="/register">Cadastra-se</Link>
                    </RegisterAccountPageFormTextH4>
                </RegisterAccountPageFormDiv>
            </LoginRegisterPageFormContainerDiv>
        </LoginPageContainerDiv>
    );
}