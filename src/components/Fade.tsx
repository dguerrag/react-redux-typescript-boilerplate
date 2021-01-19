import React, {
	ReactNodeArray,
	forwardRef,
	useEffect,
	useState,
	Ref
} from 'react';

type FadePropTypes = {
	show?: boolean;
	time?: number;
	delay?: number;
	onAnimationEnd?: Function;
	children: ReactNodeArray;
	[rest: string]: any;
};

export const Fade = forwardRef(({
									show = true,
									time = 0.5,
									delay = 0,
									onAnimationEnd = () => {
									},
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
						...rest.style,
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