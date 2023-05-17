import { Routes, Route } from 'react-router-dom';

import { LoginPage } from './Pages/LoginPage/';
import { RegisterPage } from './Pages/RegisterPage/';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Routes>
    );
}