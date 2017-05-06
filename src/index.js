import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import App from './app';

class Html extends React.Component{
	render(){
		return(
			<App />
		)
	}
}
ReactDOM.render(<Html />,document.querySelector('#root'))