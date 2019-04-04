export default (actions) => {

    actions = actions.sort((a,b) => {
        if(a.category > b.category) { return -1; }
        if(a.category < b.category) { return 1; }
        return 0;
    })

    return actions;
}