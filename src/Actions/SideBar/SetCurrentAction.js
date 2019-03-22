export default (dispatch,index) => {
    dispatch({ type: 'SET_CURRENT_ACTION', payload: index });
    dispatch({ type: 'SET_JSON_STATUS', payload: 'Passive' });
}