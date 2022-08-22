import { SET_HOME_DATA } from '../actions/home';

export type actionOptions = {
	type: typeof SET_HOME_DATA;
	changelog: Changelog | null;
};

export type homeState = Changelog | null;

const homeReducer = (state: homeState = null, action: actionOptions): homeState => {
	switch (action.type) {
		case SET_HOME_DATA:
			return action.changelog;
		default:
			return state;
	}
};

export default homeReducer;
