import React, { useEffect, useRef, useState } from 'react';
import styles from './horizontal-scroll.module.scss';
import { Arrow } from '../../assets/images/arrow';

export const HorizontalScroll = ({className, children}: any) => {
	const ref = useRef<HTMLHeadingElement>(null);
	const [translation, setTranslation] = useState(0);
	const [width, setWidth] = useState(0);
	const [parentWidth, setParentWith] = useState(1);

	useEffect(() => {
		if (ref?.current) {
			setParentWith(ref.current.getBoundingClientRect().width);
		}
	}, [ref]);

	useEffect(() => {
		if (children.length) {
			setWidth(children.length * 294);
		}
	}, [children]);


	const scrollForwards = () => {
		const newTranslation = translation - Math.round(294 * 2);
		if (newTranslation >= -width * 0.70) {
			setTranslation(newTranslation);
		} else {
			setTranslation(translation - 1);
		}
	};

	const scrollBackwards = () => {
		const newTranslation = translation + Math.round(294 * 2);
		setTranslation(newTranslation > 0 ? 0 : newTranslation);
	};

	return (
		<div className={styles.container}
			 ref={ref}>
			{translation < 0 && <button className={styles.backArrow}
										onClick={scrollBackwards}>
				<Arrow/>
			</button>}
			<div className={className}
				 style={{transform: `translateX(${translation}px)`}}>
				{children}
			</div>
			{(parentWidth < width) &&
			<button className={styles.forwardsArrow}
					onClick={scrollForwards}>
				<Arrow/>
			</button>}
		</div>
	);
};