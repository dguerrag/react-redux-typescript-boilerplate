import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../routes/routes.types';
import NetflixLogo from '../../assets/images/netflix_logo.svg';
import { Arrow } from '../../assets/images/arrow';
import { useHistory, useLocation } from 'react-router-dom';

export const Header = () => {
	const [showBack, setShowBack] = useState(false);

	const history = useHistory();
	const location = useLocation();


	useEffect(() => {
		setShowBack(location.pathname !== Routes.DASHBOARD);
	}, [location.pathname]);

	const navigateBack = () => {
		history.goBack();
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