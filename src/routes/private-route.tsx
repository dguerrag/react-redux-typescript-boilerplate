import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { Error404 } from '../components/404/error-404';


export const PrivateRoute = ({children, ...rest}: any) => {
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (show) {
			// do something
		}
	}, [show]);

	return (
		<Route {...rest}>
			{show ? <>{children}</> : <Error404/>}
		</Route>
	);
};
