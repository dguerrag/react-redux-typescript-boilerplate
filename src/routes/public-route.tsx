import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute = ({children, ...rest}: any) => (
	<Route {...rest}>
		{children}
	</Route>
);
