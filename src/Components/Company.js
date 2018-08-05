import React, { Component } from 'react';
import ListGroupItem from '../../node_modules/react-bootstrap/lib/ListGroupItem'
import CompanyList from "./CompanyList";


class Company extends Component {

    render() {
        const {id, name, address} = this.props;
        return (
            <ListGroupItem bsStyle="info">
                <h2>{name}</h2>
                <address>{address}</address>

                <button >Редактировать</button>
                <button >Удалить</button>
            </ListGroupItem>
        );
    }

}

export default Company;