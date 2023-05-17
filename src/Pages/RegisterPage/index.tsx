import React from "react";
import {
    LoginPageContainerDiv,
    LoginPageImageDiv,
    LoginRegisterPageFormContainerDiv,
    LoginAccountPageFormDiv,
    LoginAccountPageFormTextH4
} from './style.jsx';
import { Link } from 'react-router-dom';

import { FormRegister } from '../../Components/FormRegister/'

import { ImageLoginPage } from '../../Assets/ImageLoginPage.jsx';

export function RegisterPage() {
    return (
        <LoginPageContainerDiv>
            <LoginPageImageDiv>
                <ImageLoginPage />
            </LoginPageImageDiv>
            <LoginRegisterPageFormContainerDiv>
                <FormRegister />
                <LoginAccountPageFormDiv>
                    <LoginAccountPageFormTextH4>
                        Já tem uma conta? <Link to="/">Logue-se</Link>
                    </LoginAccountPageFormTextH4>
                </LoginAccountPageFormDiv>
            </LoginRegisterPageFormContainerDiv>
        </LoginPageContainerDiv>
    );
}