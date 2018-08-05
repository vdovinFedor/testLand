import React, { Component } from 'react';
import ListGroupItem from '../../node_modules/react-bootstrap/lib/ListGroupItem'

// показать-скрыть
class CompanyList extends Component {
    constructor(){
        super();
        this.state ={
            showCity: false
        }
    }

    showCity = () => {
      this.setState({
          showCity: !this.state.showCity
      })
    };
   render() {
    const {idCompany, nameCompany, addressCompany, innCompany} = this.props;
        return (
            <ListGroupItem bsStyle="info" key={this.props.company.id}>
                <h2 key={this.props.company.id + 20}>{this.props.company.name}</h2>
                <address key={this.props.company.id + 30}>{this.state.showCity ? this.props.company.adress : ''}</address>
                <div></div>
                <button onClick={this.showCity}>{this.state.showCity ? 'Скрыть адрес' : 'Показать адрес' }</button>
                <button >Удалить</button>
            </ListGroupItem>
        );
    }

}

export default CompanyList;