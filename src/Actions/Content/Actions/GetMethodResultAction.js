import moment from 'moment';
import $ from 'jquery';

export default (dispatch,currentAction) => {
    let callURL = `https://api.wo.softberg.org/?action=${currentAction.endPoint}`;
        let fileParams = {};
        let formData = new FormData();
        
        currentAction.parameters.forEach(parameter => {
            switch(parameter.type){
                case 'date':
                    formData.append(parameter.name,moment(parameter.value).unix());
                break;
                case 'file':
                    fileParams = {
                        cache: false,
                        contentType: false,
                        processData: false,
                    }
                    formData.append(parameter.name,parameter.value);
                break;
                default:
                    formData.append(parameter.name,parameter.value);
            }
        })
        dispatch({type:'SET_JSON_STATUS',payload:'Loading'})
        $.ajax({
            url:callURL,
            method:currentAction.method,
            data:formData,
            dataType:'json',
            ...fileParams,
            success:(response) => {
                dispatch({type:'SET_JSON',payload:response})
                dispatch({type:'SET_JSON_STATUS',payload:'Success'})
            }
        })
}