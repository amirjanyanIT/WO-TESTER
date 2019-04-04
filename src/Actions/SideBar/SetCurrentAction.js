export default (dispatch,endpoint) => {
    dispatch({ type: 'SET_CURRENT_ACTION_BY_ENDPOINT', payload: endpoint });
    dispatch({ type: 'SET_JSON_STATUS', payload: 'Passive' });
}