import React, { Component } from 'react';
import ListGroupItem from '../../node_modules/react-bootstrap/lib/ListGroupItem'
import CompanyList from "./CompanyList";
import { connect } from 'react-redux';


class Company extends Component {
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
    }
    // deleteBtnClick(){
    //     this.props.
    // }
    render() {
        const {id, name, adress, deleteCompany} = this.props;
        return (
            <div className="row" bsStyle="info">
                <div className="col-6 text-left">
                    <h2>{name}</h2>
                </div>

                <div className="col-3 text-left">
                    <address >{this.state.showCity ? this.props.adress : ''}</address>
                </div>
                <div className="col-3 text-left">
                <button className="btn btn-default" onClick={this.showCity}>{this.state.showCity ? 'Скрыть адрес' : 'Показать адрес' }</button>
                    <button className="btn btn-danger">Удалить</button>
                </div>
            </div>
        );
    }

}
const mapStateToProps = (state) => ({
    company: state.companyReducer
       });


// deleteCompany(idCompany) {
//     this.props.action('deleteCompany', idCompany);
//     }
export default connect(mapStateToProps)(Company)



        // {/*<ListGroupItem bsStyle="info" key={this.props.company.id}>*/}
               //  {/*<h2 key={this.props.company.id + 20}>{this.props.company.name}</h2>*/}
               //   {/*<address key={this.props.company.id + 30}>{this.state.showCity ? this.props.company.adress : ''}</address>*/}
               //  {/**/}
               //   {/*<button onClick={this.showCity}>{this.state.showCity ? 'Скрыть адрес' : 'Показать адрес' }</button>*/}
               //   {/*<button >Удалить</button>*/}
               // {/*</ListGroupItem>*/}
