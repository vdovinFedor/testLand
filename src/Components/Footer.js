import React, { Component } from 'react';

import CompanyList from './CompanyList';

class Footer extends Component {

    /*renderCompany = (array) = (array && array.map((el) => {
        return <CompanyList company={el}/>
}));*/

    render() {
       
        return (
            <div className="Footer1">
                <footer class="footer">
                    <div class="container">
                        <span class="text">Developed by Fedor Vdovin</span>
                    </div>
                </footer>
            </div>
        );
    }
}
export default Footer;