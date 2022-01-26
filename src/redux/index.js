
const INITIAL_STATE = {
usuario:"",
}

const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "USUARIO": 
                        return  {...state, usuario:action.payload}
            
           
    
        default: return state;
           
    }

}

export default reducer;
