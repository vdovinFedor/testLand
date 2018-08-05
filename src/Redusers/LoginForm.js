const initialState = {
    logged: false,
    login: ''
};
export default function loggined (state = initialState, action){
    switch (action.type) {
        case 'LOGGED':{
            return {
                ...state,
                logged: true,
                login: action.logName
            };
        }
        case 'UNLOGGED':{
            return {
                ...state,
                logged:false,
                login: ''
            };
        }
        default : return state;
    }
}