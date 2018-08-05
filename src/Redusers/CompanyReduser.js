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

export default function companyReduser (state = initialState, action) {
    switch (action.type) {
        case 'ADD' : {
            return [
                ...state, {
                    id: state.id + 1,
                    name: action.name,
                    adress: action.adress
                }
            ];
        }
            ;
        default:
            return state;
    }
}


//function CompanyReduser (state = initialState, action) {
//    return initialState;
//}


