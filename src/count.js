import React from 'react';
import Child from './countchild';
class Count extends React.Component{
	render(){
		return(
			<div>
				<div style={{display:'-webkit-flex',justifyContent:'space-around',margin:'25px',paddingBottom:'15px',borderBottom:'1px solid black'}}>
					<span>名称</span><span>单价</span><span>数量</span><span>小计</span><span>操作</span>
				</div>
				<Child />
			</div>
		)
	}
}
export default Count;