import React from 'react';


class Todolist extends React.Component{
	handleChecked(id){
		this.props.completed(id);
	}
	removeText(i){
		this.props.removeText(i);
	}
	render(){
		return(
			<ul style={{listStyle:'none',padding:'15px'}}>
				{
					this.props.data.map(
						(item)=>
						<li key={item.id}>
							<input type='checkbox' checked={item.completed} onChange={this.handleChecked.bind(this,item.id)}/>
							<span style={{textDecoration:item.completed ? 'line-through':'none'}}>{item.text}</span>
							<span onClick={this.removeText.bind(this,item.id)} className="glyphicon glyphicon-remove-circle pull-right" aria-hidden="true"></span>
						</li>
					)
				}
		</ul>
		)
	}	
}
export default Todolist;