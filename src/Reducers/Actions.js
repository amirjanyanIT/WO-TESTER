import ActionsDB from '../ActionsDB';

const initialState = {
    currentAction: null,
    actions: ActionsDB
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'APPEND_USER_INFO_IN_ACTIONS':
            let { actions } = state;
            actions.forEach((method, methodIndex) => {
                method.parameters.forEach((param, paramIndex) => {
                    for (let field in action.payload) {

                        let camelField = field.split('_');
                        camelField.forEach((part, index) => {
                            if (index !== 0) {
                                camelField[index] = part.charAt(0).toUpperCase() + part.slice(1)
                            }
                        })
                        camelField = camelField.join('');

                        if (param.name === camelField) {
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
                currentAction: state.actions[action.payload]
            }
        case 'SET_CURRENT_ACTION_PARAMETER_VALUE':
            let currentAction = state.currentAction;
            let { parameters } = currentAction;

            parameters = parameters.map((parameter) => {
                if(parameter.name === action.payload.name) {
                    return {
                        ...parameter,
                        value:action.payload.value
                    }
                }
                else {
                    return parameter;
                }
            });
            currentAction.parameters = parameters;
            return {
                ...state,
                currentAction
            }
        default:
            return state;
    }
}