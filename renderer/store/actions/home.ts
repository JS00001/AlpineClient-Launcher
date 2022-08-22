export const SET_HOME_DATA = 'SET_HOME_DATA';

const setHomeData = (changelog: Changelog | null) => ({
	type: SET_HOME_DATA,
	changelog,
});

export default setHomeData;
