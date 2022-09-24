import React, { Component } from 'react';
import axios from 'axios';
const getCurso = "http://localhost:5092/api/curso";

const cursoState = {
    curso: { id: 0, codCurso: 0, nomeCurso: '', periodo: '' },
    lista: []
}


export default class OptionsSync extends Component {
    state = { ...cursoState }
    componentDidMount() {

        axios(getCurso).then(resp => {

            this.setState({ lista: resp.data })
            console.log(this.state.lista)
        })
    }
   
    render() {
        return (
            <select >{this.state.lista.map(
                (cursos) =>
                    <option id='cursoOption' key={cursos.id} value={cursos.codCurso}>{cursos.nomeCurso}</option>
            )}</select>
        )
    }
}