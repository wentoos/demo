import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todolist from './todolist';
import Todofilter from './todofilter';

class App extends React.Component{
	constructor(){
		super();
		this.state={
			input:'',
			data:[
				
			],
			filter:'ALL'
		}
	}
	componentWillMount(){
		if(!localStorage.todos){
			localStorage.todos = JSON.stringify([])
		}
		this.setState({data:JSON.parse(localStorage.todos)})
	}
	handleCompleted(id){
		let ind = this.state.data.findIndex(item =>item.id === id)
		console.log(ind)
		let newData = this.state.data;
		newData[ind].completed=!newData[ind].completed;
		this.setState({data:newData})
		localStorage.todos = JSON.stringify(newData)
	}
	removeText(id){
		let ind = this.state.data.findIndex(item =>item.id === id)
		if(confirm('你确定？？')){
		let newData = this.state.data;
		newData.splice(ind,1)
		this.setState({data:newData})
		localStorage.todos = JSON.stringify(newData)
		}	
	}
	text(i){
		this.setState({filter:i})
	}
	handleSubmit(e){
		e.preventDefault();
		console.log(this.state.input);
		let value =this.state.input.trim();
		if(value){
			this.setState({data:[...this.state.data,{text:value,completed:false,id:Date.now()}]});
			localStorage.todos=JSON.stringify([...this.state.data,{text:value,completed:false,id:Date.now()}])
		}else{
			alert('输出不能为空')
			this.input.focus()
		}
		this.setState({input:''})
	}
	hanndleFilter(a){
		this.setState({filter:'a'})
	}
	render(){
		let showData=
			this.state.filter=== 'ALL' ? this.state.data : 
			this.state.filter=== 'ACTIVE' ? this.state.data.filter(item => !item.completed) :
			this.state.data.filter(item => item.completed)
		return(
			<div>
				<h1 className="text-center">todo</h1>
				<form className='form-inline text-center' onSubmit={this.handleSubmit.bind(this)}>
					<input type='text' className="form-control" value={this.state.input} onChange={
							(e) =>this.setState({input:e.target.value}) } ref={input =>this.input =input}/>
					<button className="btn btn-default" >添加{this.state.data.length}</button>
				</form>
				<Todolist data={showData} completed={this.handleCompleted.bind(this)} removeText={this.removeText.bind(this)}/>
				<Todofilter filter={this.hanndleFilter.bind(this)} text={this.text.bind(this)}/>
			</div>
		)
	}
}
export default App;