import $ from 'jquery';

export default (dispatch,setState,history,data) => {
    dispatch({type:'SET_STATUS',payload:'Fetching'});
        $.post('https://api.wo.softberg.org/?action=user_signIn',{
            password:data.password,
            username:data.login,
        },response => {
            dispatch({type:'SET_STATUS',payload:'Passive'});
            if(response.message) {
                setState({log:response.message});
            }
            else {
                localStorage.setItem('userInfo',JSON.stringify(response.data));
                dispatch({type:'SET_USER_INFO',payload:response.data});
                dispatch({type:'APPEND_USER_INFO_IN_ACTIONS',payload:response.data});
                history.push('/')
            }
    },'json')
}