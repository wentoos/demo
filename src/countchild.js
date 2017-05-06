import React from 'react';

class Child extends React.Component{
	render(){
		return(
			<div>
				<div style={{display:'-webkit-flex',justifyContent:'space-around',margin:'10px 25px',paddingBottom:'15px',borderBottom:'1px solid red'}}>
					<span>小红书</span>
					<span>10</span>
					<span>10</span>
					<span>100</span>
					<button>删除</button>
				</div>
			</div>
		)
	}
}
export default Child;