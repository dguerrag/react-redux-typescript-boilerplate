import React from 'react';
import styles from './error-404.module.scss';
import Error404Img from '../../assets/images/error-404.svg';


export const Error404 = () =>
	<div className={styles.container}>
		<img src={Error404Img} alt={'404-error'}/>
	</div>;