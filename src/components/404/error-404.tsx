import React from 'react';
import styles from './error-404.module.scss';
import Error404Img from '../../assets/images/error-404.svg';

// Mock page for 404 errors, urls typed that doesn't exist e.g.
export const Error404 = () =>
	<div className={styles.container}>
		<img src={Error404Img} alt={'404-error'}/>
	</div>;