import React, { ReactNodeArray, useEffect, useRef, useState } from 'react';
import styles from './horizontal-scroll.module.scss';
import { Arrow } from '../../assets/images/arrow';
import { Sizes } from '../../constants/sizes';


// This component is not an example, it was just for fun.
type HorizontalScrollProps = {
	className: string | undefined;
	height: number;
	children: ReactNodeArray
}
export const HorizontalScroll = ({className, height, children}: HorizontalScrollProps) => {
	const ref = useRef<HTMLHeadingElement>(null);
	const [translation, setTranslation] = useState(0);
	const [width, setWidth] = useState(0);
	const [parentWidth, setParentWith] = useState(1);
	const [maxTranslation, setMaxTranslation] = useState(0);


	useEffect(() => {
		if (ref?.current) {
			setParentWith(ref.current.getBoundingClientRect().width);
		}
	}, [ref]);

	useEffect(() => {
		if (children.length && parentWidth) {
			const width = (children.length * Sizes.CARD_WIDTH) + (Sizes.CARD_MARGIN * children.length - 1);
			setWidth(width);
			setMaxTranslation(-width + parentWidth);
		}
	}, [children, parentWidth]);


	const scrollForwards = () => {
		const newTranslation = translation - Sizes.HORIZONTAL_PADDING - Math.round(Sizes.CARD_WIDTH * 2);
		if (newTranslation > maxTranslation) {
			setTranslation(newTranslation);
		} else if (newTranslation <= maxTranslation) {
			setTranslation(maxTranslation - Sizes.HORIZONTAL_PADDING);
		}
	};

	const scrollBackwards = () => {
		const newTranslation = translation + Math.round(Sizes.CARD_WIDTH * 2);
		setTranslation(newTranslation > 0 ? 0 : newTranslation);
	};

	return (
		<div className={styles.container}
			 ref={ref}
			 style={{
				 height,
				 borderLeft: translation < 0
					 ? Sizes.HORIZONTAL_PADDING + 'px solid transparent'
					 : '0px solid transparent'
			 }}>
			{translation < 0 && <button className={styles.backArrow}
										onClick={scrollBackwards}>
				<Arrow/>
			</button>}
			<div className={className}
				 style={{
					 transform: `translateX(${translation}px)`,
					 width: width + Sizes.HORIZONTAL_PADDING * 2
				 }}>
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