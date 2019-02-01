import React from 'react'
import {Link} from 'react-router-dom'

const AdminMenu = propos => {
    return (
        <div className="list-group">
            <a className="list-group-item list-group-item-action active">Selecione um opção</a>
            <Link to="/admin/portfolio" className="list-group-item list-group-item-action">PortFolio</Link>
        </div>
    )
}

export default AdminMenu