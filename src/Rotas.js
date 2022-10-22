import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './components/templates/Main';
import CrudAluno from './CrudAluno/CrudAluno';
import AuthService from './Services/AuthService';
import Login from './components/templates/Login/Login';
import Logout from './components/templates/Logout/Logout';


export default function Rotas() {
    const [currentUser, setCurrentUser] = useState(undefined);
    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);
    return (
        <Routes>
            <Route exact path='/'
                element={
                    <Main title="Bem Vindo!">
                        <div>Cadastro de alunos, cursos e carômetro</div>
                    </Main>
                }
            />
            {currentUser ? (
                <Route exact path='/alunos'
                    element={<CrudAluno />}
                />
            ) : (
                <Route exact path='/alunos'
                    element={
                        <Main title="Cadastro de Alunos">
                            <div>Não autorizado!</div>
                        </Main>
                    }
                />
            )}
            {currentUser ? (
                <Route exact path='/cursos'
                    element={
                        <Main title="Cursos">
                            <div>Página de cursos...</div>
                        </Main>
                    }
                />
            ) : (
                <Route exact path='/cursos'
                    element={
                        <Main title="Cursos">
                            <div>Não autorizado!</div>
                        </Main>
                    }
                />
            )}
            <Route exact path='/carometro'
                element={
                    <Main title="Carômetro">
                        <div>Carômetro...</div>
                    </Main>
                }
            />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
            <Route path="*" to='/' />
        </Routes>
    )
}