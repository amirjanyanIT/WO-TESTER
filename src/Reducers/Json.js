const initialState = {
    status:'Passive',
    value:null
}

export default (state = initialState,action) => {
    switch(action.type){
        case 'SET_JSON_STATUS':
            return {
                ...state,
                status:action.payload
            }
        case 'SET_JSON':
            return {
                ...state,
                value:action.payload
            }
        default:
            return state;
    }
}