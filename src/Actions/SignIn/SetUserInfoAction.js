export default (dispatch,userInfo) => {
    dispatch({type:'SET_USER_INFO',payload:userInfo});
    dispatch({type:'APPEND_USER_INFO_IN_ACTIONS',payload:userInfo});
}