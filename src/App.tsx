import React from 'react';
import { Router } from './routes/router';
import { Header } from './components/header/header';

export const App = () => (
	<>
		<Header/>
		<Router/>
	</>
);
