let initialState= [
        {
        id: 1,
        name: 'Bell',
        adress: 'Saratov'
        },
        {
            id: 2,
            name: 'OKE',
            adress: 'Saratov'
        },
        {
            id: 3,
            name: 'sargaz',
            adress: 'Saratov'
        },
        {
            id: 4,
            name: 'Google',
            adress: 'Saratov'
        },
        {
            id: 5,
            name: 'Yahoo',
            adress: 'Saratov'
        },
        {
            id: 6,
            name: 'Nevermind',
            adress: 'Saratov'
        },
];

export default function companyReducer (state = initialState, action) {
    switch (action.type) {
        case 'ADD' :
            return [
                ...state,
                ...action.payload
                    ];

        default:
            return state;
    }
}


//function CompanyReduser (state = initialState, action) {
//    return initialState;
//}


