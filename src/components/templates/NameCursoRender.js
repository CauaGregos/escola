import React, { Component } from 'react';
import axios from 'axios';

const urlAPI = "http://localhost:5092/api/curso";
const initialState = {
    curso: { id: 0, codCurso: 0, nomeCurso: '', periodo: ''},
    lista: []
}


export default class NameCurso extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })
        })
    }

    

    render() {
        const getNameCurso = (codCurso)=>{
            let result;
            for (const key in this.state.lista) {
                if(this.state.lista[key].codCurso === codCurso){
                    result = this.state.lista[key].nomeCurso;
                }
            }
            return result;
        }
        return (
            <div> 
                <p>Curso: {`[${this.props.data}]`} {getNameCurso(this.props.data)}</p>
            </div>
        )
    }
}