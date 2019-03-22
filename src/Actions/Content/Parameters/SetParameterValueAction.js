export default (dispatch,name,value) => {
    dispatch({
        type: 'SET_CURRENT_ACTION_PARAMETER_VALUE',
        payload: { name, value }
    })
}