const initialState = {
    windowShow: false,
    modalType: '',
    id: ''

};

export default function windowShow(state = initialState, action) {
    switch (action.type) {
        case 'OPEN' : {
            return {
                ...state,
                windowShow: true,
                modalType: action.modalType,
                id: action.id
            };
        }

        case 'CLOSE' : {
            return {
                ...state,
                windowShow: false,
                modalType: '',
                id: ''
            };
        }

        default : return state;
    }
}
