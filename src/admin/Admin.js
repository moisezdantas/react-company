import React, { Component } from 'react'
import {Route} from 'react'

import AdminMenu from './AdminMenu';
import AdminPortFolio from './AdminPortFolio';

class Admin extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h2>Painel de Aministrativo</h2>
                <Route path={'/'} component={AdminMenu}/>
                <Route path={`${this.props.match.url}/portfolio`} component={AdminPortFolio}/>
            </div>
        )
    }
}

export default Admin