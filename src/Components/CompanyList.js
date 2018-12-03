import React, { Component } from 'react';
import ListGroupItem from '../../node_modules/react-bootstrap/lib/ListGroupItem'
import Company from './Company';
import { connect } from 'react-redux';
import companyReducer from "../Redusers/CompanyReduser";
// показать-скрыть
class CompanyList extends Component {
    constructor(props){
        super(props);
        this.deleteCompany=this.deleteCompany.bind(this);
    }
    componentDidMount = () =>{
        this.props.loadCompany();
    };


    deleteCompany(idCompany) {

        this.props.action('deleteCompany', this.state.id);
    }

renderCompany = (array) => (array && array.map(company =>{
    return (
        <Company
            id = {company.id}
            name = {company.name}
            adress = {company.adress}
            deleteCompany={this.deleteCompany}
        />
    )}));

render() {
    return(
        <div className="companyList">
            {this.renderCompany(this.props.company)}
        </div>
    )
}}
//данные из стора
const mapStateToProps = (state) => ({
    company: state.companyReducer
       });
const mapDispatchToProps = (dispatch) =>{
    return {loadCompany: () => {
        dispatch({
            type: 'ADD',
            payload:
                {
                    id: 993,
                    name: 'Magnit',
                    adress: 'Saratov'
                }


        },
        {
            type:'DELETE'
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


