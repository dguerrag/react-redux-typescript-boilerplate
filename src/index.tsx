import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Sizes } from './constants/sizes';
import { CssVariables } from './constants/css-variables';

document.body.style.setProperty(CssVariables.CARD_WIDTH, Sizes.CARD_WIDTH + 'px');
document.body.style.setProperty(CssVariables.CARD_HEIGHT, Sizes.CARD_HEIGHT + 'px');
document.body.style.setProperty(CssVariables.CARD_DOWN_INFO_HEIGHT, Sizes.CARD_DOWN_INFO_HEIGHT + 'px');
document.body.style.setProperty(CssVariables.CARD_MARGIN, Sizes.CARD_MARGIN + 'px');
document.body.style.setProperty(CssVariables.HORIZONTAL_PADDING, Sizes.HORIZONTAL_PADDING + 'px');

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
