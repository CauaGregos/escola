import React, { Component } from 'react';
import './style.css';
import Main from '../components/templates/Main';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import 'bootstrap'
import ImagePerfil from '../components/templates/perfilImages';
import OptionsSync from '../components/templates/optionsSync';
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

    init(param){
        let value = document.getElementById('cursoOption').value
        
        if(param ==false){
            axios(urlAPI).then(resp => {
                this.setState({ lista: resp.data })
    
            })
            return;
        }
        axios(urlAPI).then(resp => {
           
            const array = resp.data
           
            let array2 = [];
            for (let i = 0; i < array.length; i++) {
              
               if(array[i].codCurso == value){
                    array2.push(array[i])
                  
               }
                
            }
            this.setState({ lista: array2 })
        })
    }
    renderTable() {
        return (
            <div className='card'>
                <OptionsSync/>
                <button onClick={e=>this.init()}>Buscar</button>
                <button onClick={e=>this.init(false)}>Remover filtro</button>
                {this.state.lista.map(
                    (aluno) =>
                <Card key={aluno.id} style={{marginTop:'10px',alignSelf:'center',justifyContent:'center',flexWrap:''}}>
                    <ImagePerfil/>
                    <Card.Body style={{alignSelf:'center'}}>
                        <Card.Title>{aluno.ra}</Card.Title>
                        <Card.Text>
                            {aluno.nome}
                        </Card.Text>
                        <Card.Text>
                            Curso: {aluno.codCurso}
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