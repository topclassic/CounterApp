//Second Create Switch case
export default (state = 0, action) =>{
    switch(action.type){
        case 'SUM':
            return state +1

        case 'MINUS':
            return state -1

        default:
            return state
    }
}