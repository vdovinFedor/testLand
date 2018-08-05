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

    showCity = () => {
        this.setState({
            showCity: !this.state.showCity
        })
    };
    render() {
        return(
            <div>
                {this.props.company.map(company =>{
                    return (
                        <Company
                            id = {company.id}
                            name = {company.name}
                            adress = {company.address}
                        />
                    )})}
            </div>)
    }
}

const mapStateToProps = (state) => ({
    company: state.company
})
export default connect(mapStateToProps)(CompanyList);
                 // {/*<ListGroupItem bsStyle="info" key={this.props.company.id}>*/}
               //  {/*<h2 key={this.props.company.id + 20}>{this.props.company.name}</h2>*/}
               //   {/*<address key={this.props.company.id + 30}>{this.state.showCity ? this.props.company.adress : ''}</address>*/}
               //  {/**/}
               //   {/*<button onClick={this.showCity}>{this.state.showCity ? 'Скрыть адрес' : 'Показать адрес' }</button>*/}
               //   {/*<button >Удалить</button>*/}
               // {/*</ListGroupItem>*/}


