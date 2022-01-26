
const INITIAL_STATE = {
usuario:"",
}

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "USUARIO": 
                        return  {...state, usuario:action.payload}
            
            break;
    
        default: return state;
            break;
    }

}

export default reducer;
