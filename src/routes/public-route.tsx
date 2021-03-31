import React, { ReactNode, ReactNodeArray } from 'react';
import { Route } from 'react-router-dom';


export type RouteProps = {
	children?: ReactNode | ReactNodeArray;
	[rest: string]: unknown;
}
export const PublicRoute = ({children, ...rest}: RouteProps) => (
	<Route {...rest}>
		{children}
	</Route>
);
