import $ from 'jquery';

export default (dispatch) => {
    const USER_INFO = localStorage.getItem('userInfo');
    if(USER_INFO) {
        const USER_INFO_JSON = JSON.parse(USER_INFO);
        $.get('https://api.wo.softberg.org?action=user_getUserData',{
            userId:USER_INFO_JSON.user_id,
            apiKey:USER_INFO_JSON.api_key
        },response => {
            if(response.status === 'error'){
                localStorage.removeItem('userInfo');
            }
            else {        
                dispatch({
                    type:'APPEND_USER_INFO_IN_ACTIONS',
                    payload:USER_INFO_JSON
                })
            }
        },'json')
    }
}