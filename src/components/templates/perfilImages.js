import React, { Component } from 'react';

import axios from 'axios';
// import {Card} from 'react-bootstrap';
import 'bootstrap'
const apiImage = "https://api.thedogapi.com/v1/images/search"

const initialState = {
    image: { id: "", url: '', width: 0, height: 0 },
    lista: []
}

export default class ImagePerfil extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(apiImage).then(resp => {
            this.setState({ lista: resp.data })
            
        })
    }

    render() {
        return (
            <div>
            {this.state.lista.map(
                (e) =>
                <img key={e.id} style={{width:'150px',marginLeft:'10%',borderRadius:'300px'}} src={e.url}/>
            )}
          </div>
        )
    }
}