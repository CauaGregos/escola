import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from '../src/components/templates/Main';
import CrudAluno from './CrudAluno/CrudAluno';
import CrudCurso from './CrudCurso/CrudCurso';
export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main title="Bem Vindo!">
                    <div>Página não encontrada</div></Main>} component={Main} />
                <Route path='/aluno' element={<CrudAluno/>} component={CrudAluno}/>            
                <Route path='/curso' element={<CrudCurso/>} component={CrudCurso}/>            
            </Routes>
        </BrowserRouter>
        
    )
}