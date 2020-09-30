import { combineReducers } from 'redux';
import auth from './auth';
import serverReducer from './serverReducer'

const rootReducer = combineReducers({
    auth,
    servers: serverReducer
});

export default rootReducer;