import React from 'react';
import App from './app';
import ReactDOM from 'react-dom';



class Html extends React.Component{
    render(){
        return(
			<div>
				<App />
			</div>
        )
    }
}

ReactDOM.render(<Html />,document.querySelector('#root'))  
