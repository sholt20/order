import {
    SET_TOKEN,
    REMOVE_TOKEN
} from '../actions/auth';

const initialState = {
    loggedIn: false,
    currUser: null,
    token: null
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOKEN: {
            console.log(action.username)
            return {
                ...state,
                token: action.token,
                loggedIn: true,
                currUser: action.username
            };
        }

        case REMOVE_TOKEN: {
            console.log(state.currUser)
            const nextState = { ...state, loggedIn: false, currUser: null };
            delete nextState.token;
            return nextState;
        }

        default: return state;
    }
}

export default authReducer;