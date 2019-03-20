const initialState = {
    currentAction:null,
    actions:[
        {
            method:'get',
            endPont:'user_getUserData',
            category:'user',
            label:'Get User Data',
            parameters: [
                {
                    name:'userId',
                    placeHolder:'User Id',
                    value:'',
                    disabled:true
                },
                {
                    name:'apiKey',
                    placeHolder:'API Key',
                    value:'',
                    disabled:true
                },
            ]
        },
    ]
}

export default (state = initialState,action) => {
    switch(action.type) {
            case 'APPEND_USER_INFO_IN_ACTIONS':
                let { actions } = state;
                actions.forEach((method,methodIndex) => {
                    method.parameters.forEach((param,paramIndex) => {
                        for(let field in action.payload) {
                            
                            let camelField = field.split('_');
                            camelField.forEach((part,index) => {
                                if(index !== 0){
                                    camelField[index] = part.charAt(0).toUpperCase() + part.slice(1)
                                }
                            })
                            camelField = camelField.join('');

                            if(param.name === camelField) {
                                actions[methodIndex].parameters[paramIndex].value = action.payload[field];
                            }
                        }
                    });
                })
                return {
                    ...state,
                    actions   
                }
            case 'SET_CURRENT_ACTION':
                return {
                    ...state,
                    currentAction:state.actions[action.payload]
                }
        default:
            return state;
    }
}