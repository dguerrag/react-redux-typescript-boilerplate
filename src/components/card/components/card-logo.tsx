import LogoShort from '../../../assets/images/netflix_logo_short.svg';
import styles from '../card.module.scss';
import React from 'react';

export const CardLogo = () => (<img src={LogoShort} alt={'logo-short'} className={styles.logo}/>);