import { useSelector } from 'react-redux';
import { State } from './store';


export const useRouterReducerLocation = () => {
	return useSelector((state: State) => state.router.location);
};
