import React, { CSSProperties, forwardRef, ReactNode, ReactNodeArray, Ref, useEffect, useState } from 'react';


type FadePropTypes = {
	show?: boolean;
	time?: number;
	delay?: number;
	onAnimationEnd?: Function;
	children: ReactNode | ReactNodeArray;
	style?: CSSProperties;
	[rest: string]: unknown;
};

export const Fade = forwardRef(({
									show = true,
									time = 0.5,
									delay = 0,
									onAnimationEnd = () => {
									},
									style = {},
									children,
									...rest
								}: FadePropTypes,
								ref: Ref<HTMLDivElement>) => {

	const [shouldRender, setRender] = useState(show);

	useEffect(() => {
		if (show) {
			setRender(true);
		}
	}, [show]);

	const onAnimationEndFn = () => {
		if (!show) {
			onAnimationEnd && onAnimationEnd();
			setRender(false);
		}
	};

	return (
		shouldRender ? (
				<div
					style={{
						...style,
						animation: `${show ? 'fade-in' : 'fade-out'} ${time}s ${delay}s ease-out forwards`
					}}
					onAnimationEnd={onAnimationEndFn}
					ref={ref}
					{...rest}>
					{children}
				</div>)
			: <></>
	);
});