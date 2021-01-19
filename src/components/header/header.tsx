import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../routes/routes.types';
import NetflixLogo from '../../assets/images/netflix_logo.svg';
import { Arrow } from '../../assets/images/arrow';
import { useDispatch } from 'react-redux';
import { goBack } from 'connected-react-router';
import { useRouterReducerLocation } from '../../store/router.reducer';

export const Header = () => {
	const dispatch = useDispatch();
	const {pathname} = useRouterReducerLocation();
	const [showBack, setShowBack] = useState(false);

	useEffect(() => {
		setShowBack(pathname !== Routes.DASHBOARD);
	}, [pathname]);

	const navigateBack = () => {
		// Example of how to navigate back to browse history using redux
		dispatch(goBack());
	};

	return (
		<div className={styles.container}>
			<nav className={styles.links}>
				<img src={NetflixLogo} alt={'netflix-logo'}/>
				<ul>
					<li>
						<NavLink to={Routes.DASHBOARD}>Home</NavLink>
					</li>
					<li>
						<NavLink to={Routes.MOVIES}>Movies</NavLink>
					</li>
					<li>
						<NavLink to={Routes.SERIES}>Series</NavLink>
					</li>
					<li>
						<NavLink to={Routes.LIST}>My List</NavLink>
					</li>
				</ul>
			</nav>
			{showBack && <button className={styles.back}
								 onClick={navigateBack}>
				<Arrow/>
			</button>}
		</div>
	);
};