import { useDispatch, useSelector } from 'react-redux';
import homeAction from '@/store/actions/home';

const useHomePage = () => {
	const dispatch = useDispatch();
	const homePage = useSelector((state: { home: Changelog | null }) => state.home);

	const setHomePage = (changelog: Changelog | null) => {
		dispatch(homeAction(changelog));
	};

	return [homePage, setHomePage] as const;
};

export default useHomePage;
