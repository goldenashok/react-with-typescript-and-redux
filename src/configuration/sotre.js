import * as redux from 'redux';
import thunk from 'redux-thunk';
import UserListReducer from '../user-list/UserListReducer';


const rootReducer = redux.combineReducers({
    UserListReducer: UserListReducer
});

const store = redux.createStore(rootReducer, redux.applyMiddleware(thunk));
export default store;