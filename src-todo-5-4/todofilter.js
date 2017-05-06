import React from 'react';


class Todofilter extends React.Component{

	render(){
		let btns =['ALL','ACTIVE','COMPLETED']
		return(
			<div>
				<span>分类： </span>
			{
				btns.map((item,index) => <button className="btn btn-default" key={index} onClick={()=>this.props.text(item)} className={{}}>{item}</button>
				)
				
			}
				
				
			</div>
		)
	}	
}
export default Todofilter;