import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from '../src/components/templates/Main';
import CrudAluno from './CrudAluno/CrudAluno';
export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/'
                element={
                    <Main title="Bem Vindo!">
                        <div>Cadastro de alunos, cursos e carômetro</div>
                    </Main>}
            />
            <Route path='/alunos' element={<CrudAluno />} />
            <Route path='*' element={

                <Main title="Bem Vindo!">
                    <div>Página não encontrada</div>
                </Main>} />

        </Routes>
    )
}