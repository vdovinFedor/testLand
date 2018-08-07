import React, { Component } from 'react';
import ListGroupItem from '../../node_modules/react-bootstrap/lib/ListGroupItem'
import Company from './Company';
import { connect } from 'react-redux';
// показать-скрыть
class CompanyList extends Component {
    constructor(){
        super();
        this.state ={
            showCity: false
        }
    }
    componentDidMount = () =>{
        this.props.loadCompany();
    };
    showCity = () => {
        this.setState({
            showCity: !this.state.showCity
        })
    }
renderCompany = (array) => (array && array.map(company =>{
    return (
        <Company
            id = {company.id}
            name = {company.name}
            adress = {company.address}
        />
    )}));

render() {
    return(
        <div>
            {this.renderCompany(this.props.company)}

        </div>)
}}
//данные из стора
const mapStateToProps = (state) => ({
    company: state.windowShow.company54,
    oneProps: [1,2,4]
    });
const mapDispatchToProps = (dispatch) =>{
    return {loadCompany: () => {
        dispatch({
            type: 'ADD',
            payload: [
                {
                    id: 2,
                    name: 'OKE',
                    adress: 'Saratov'
                },
                {
                    id: 3,
                    name: 'sargaz',
                    adress: 'Saratov'
                }
            ]
        })
        }};
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyList);
                 // {/*<ListGroupItem bsStyle="info" key={this.props.company.id}>*/}
               //  {/*<h2 key={this.props.company.id + 20}>{this.props.company.name}</h2>*/}
               //   {/*<address key={this.props.company.id + 30}>{this.state.showCity ? this.props.company.adress : ''}</address>*/}
               //  {/**/}
               //   {/*<button onClick={this.showCity}>{this.state.showCity ? 'Скрыть адрес' : 'Показать адрес' }</button>*/}
               //   {/*<button >Удалить</button>*/}
               // {/*</ListGroupItem>*/}


