import { combineReducers, createStore } from 'redux';
import homeReducer from './reducers/home';

const reducers = combineReducers({
	home: homeReducer,
});

export default createStore(reducers);
