const initialState = {
    status:'Passive',
    userInfo:null
}

export default (state = initialState,action) => {
    switch(action.type){
        case 'SET_STATUS':
            return {
                ...state,
                status:action.payload
            }
        case 'SET_USER_INFO':
            return {
                ...state,
                status:'Passive',
                userInfo: (action.payload ? action.payload : null)
            }
        default:
            return state;
    }
}