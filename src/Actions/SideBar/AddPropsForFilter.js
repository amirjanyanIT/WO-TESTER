export default (actions) => {
    actions = actions.map((action) => {
        return {
            ...action,
            visibility:true
        }
    })
    return actions
}