import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'

import {auth} from './../firebase-config'
import AdminMenu from './AdminMenu';
import AdminPortFolio from './AdminPortFolio';


class Admin extends Component {

    constructor(props){
        super(props)

        this.state = {
            estaLogando: true,
            estaAutenticado: false,
            user: null
        }
    }


    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.setState({
                estaLogando: false,
                estaAutenticado: !!user,
                user
            })
        })
    }

    render(){
        if(this.state.estaLogando){
            return (
                <div className="container">
                     <p>
                         <span className="glyphicon glyphicon-refresh" /> Aguarde...
                    </p>
                </div>
            )
        }
        if(!this.state.estaAutenticado){
            return <Redirect to='/login'/>
        }
        return (
            <div className="container">
                <h2>Painel de Aministrativo</h2>
                <Route path={'/'} component={AdminMenu}/>
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortFolio}/>
            </div>
        )
    }
}

export default Admin