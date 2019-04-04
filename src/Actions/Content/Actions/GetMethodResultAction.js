import moment from 'moment';
import $ from 'jquery';

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}

export default (dispatch,currentAction) => {
    let callURL = `https://api.wo.softberg.org/?action=${currentAction.endPoint}`;
        let parameters = {}
        
        currentAction.parameters.forEach(parameter => {
            switch(parameter.type){
                case 'date':
                parameters[parameter.name] = moment(parameter.value).unix()
                break;
                case 'file':
                    getBase64(parameter.value).then(data => parameters[parameter.name] = data)
                break;
                default:
                parameters[parameter.name] = parameter.value;
            }
        })
        dispatch({type:'SET_JSON_STATUS',payload:'Loading'})
        $.ajax({
            url:callURL,
            method:currentAction.method,
            data:parameters,
            processData:true,
            dataType:'json',
            success:(response) => {
                dispatch({type:'SET_JSON',payload:response})
                dispatch({type:'SET_JSON_STATUS',payload:'Success'})
            }
        })
}