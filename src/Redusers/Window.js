const initialState = {
    windowShow: false,
    modalType: '',
    id: ''

};

export default function windowShow(state = initialState, action) {
    switch (action.type) {
        case 'ADD' : {
            console.log('reducer ADD', action.payload);
            return {company54: action.payload}
        }

        case 'CLOSE' : {
            return {
                ...state,
                windowShow: false,
                modalType: '',
                id: ''
            };
        }

        default :
            console.log('default winwids reducer');
            return state;
    }
}
