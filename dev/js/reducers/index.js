import {combineReducers} from 'redux';
import UserReducer from './reducer-users';
import ActiveUserReducer from './reducer-active-user';
import PostsReducer from './postReducer';

const allReducers=combineReducers({
    users: UserReducer,
    activeUser:ActiveUserReducer,
    posts: PostsReducer

});
export default allReducers;
