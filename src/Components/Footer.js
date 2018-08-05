import React, { Component } from 'react';

import CompanyList from './CompanyList';

class Footer extends Component {

    /*renderCompany = (array) = (array && array.map((el) => {
        return <CompanyList company={el}/>
}));*/

    render() {
        let company = [
            {
                id: 1,
                name: 'takoe',
                adress: 'saratov'
            },
            {
                id: 2,
                name: 'takoe2',
                adress: 'saratov'
            },
            {
                id: 3,
                name: 'takoe3',
                adress: 'saratov'
            },
            {
                id: 4,
                name: 'takoe3',
                adress: 'saratov'
            },
            {
                id: 5,
                name: 'takoe3',
                adress: 'saratov'
            },
            {
                id: 6,
                name: 'takoe3',
                adress: 'saratov'
            },
        ];
        return (
            <div>
                {company.map(el => {
                    return <CompanyList company={el}/>
                })}
            </div>
        );
    }
}
export default Footer;