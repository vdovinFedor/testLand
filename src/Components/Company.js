import React, { Component } from 'react';
import ListGroupItem from '../../node_modules/react-bootstrap/lib/ListGroupItem'
import CompanyList from "./CompanyList";


class Company extends Component {
    constructor(){
        super(props)
    }

    render() {
        const {idCompany, nameCompany, addressCompany, innCompany, editCompany, deleteCompany} = this.props;
        return (
            <ListGroupItem bsStyle="info">
                <h2>bujhm</h2>
                <address>yoyoyo</address>
                <div>{innCompany}</div>
                <button >Редактировать</button>
                <button >Удалить</button>
            </ListGroupItem>
        );
    }

}

export default Company;