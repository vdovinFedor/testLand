let initialState= [
        {
        id: 1,
        name: 'Bell',
        adress: 'Saratov'
        },
        {
            id: 2,
            name: 'OKE',
            adress: 'Tula'
        },
        {
            id: 3,
            name: 'Sargaz',
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
         case 'ADD' : {
                console.log('reducer ADD', action.payload);
                return [...state, action.payload]
            }
        default:
            return state;
    }
}


//function CompanyReduser (state = initialState, action) {
//    return initialState;
//}


