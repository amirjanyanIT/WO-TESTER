import moment from 'moment';
import $ from 'jquery';

export default (dispatch,currentAction) => {
    let callURL = `https://api.wo.softberg.org/?action=${currentAction.endPoint}`;
        let parameters = {}
        
        currentAction.parameters.forEach(parameter => {
            switch(parameter.type){
                case 'date':
                    parameters[parameter.name] = moment(parameter.value).unix()
                break;
                default:
                    parameters[parameter.name] = parameter.value
            }
        })
        dispatch({type:'SET_JSON_STATUS',payload:'Loading'})
        $.ajax({
            url:callURL,
            method:currentAction.method,
            data:parameters,
            dataType:'json',
            success:(response) => {
                dispatch({type:'SET_JSON',payload:response})
                dispatch({type:'SET_JSON_STATUS',payload:'Success'})
            }
        })
}