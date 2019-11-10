// set initial state is default value when it mounts for the 1st time
const INITIAL_STATE = {
    currentUser:null
}

const userReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser:action.payload
            }
        
        default: 
            return state;    
    }
}

export default userReducer;

// action - type -'string value' and payload is values we want to apply on the state