import React, { Component } from 'react';
import './style.css';
import Main from '../components/templates/Main';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import 'bootstrap'
import ImagePerfil from '../components/templates/perfilImages';
const title = "Carometro dos Alunos";

const urlAPI = "http://localhost:5092/api/aluno";

const initialState = {
    aluno: { id: 0, ra: '', nome: '', codCurso: 0 },
    lista: []
}

export default class Carometro extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(urlAPI).then(resp => {
            this.setState({ lista: resp.data })

        })
    }


    renderTable() {
        return (
            <div style={{width:120}}>
                {this.state.lista.map(
                    (aluno) =>
                <Card key={aluno.id} style={{marginTop:'10px',alignSelf:'center',justifyContent:'center'}}>
                    <ImagePerfil/>
                    <Card.Body>
                        <Card.Title>{aluno.ra}</Card.Title>
                        <Card.Text>
                            {aluno.nome}
                        </Card.Text>
                    
                    </Card.Body>
                </Card>
                )}
            </div>

        )
    }
    render() {
        return (
            <Main title={title}>
                {this.renderTable()}
            </Main>
        )
    }
}