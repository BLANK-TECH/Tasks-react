import React, {Component} from 'react';

export default class TaskForm extends Component{
    state = {
        title:'',
        description:''
    }

    onSubmit = e =>{
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.description);   
    }

    onChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return(
            <form style={styleForm} onSubmit={this.onSubmit}>
                <input 
                    name='title'
                    type='text' 
                    placeholder='Write a task' 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <textarea 
                    name='description'
                    placeholder='Write a description' 
                    onChange={this.onChange} 
                    value={this.state.description}/>
                <br/>
                <input type='submit'></input>
            </form>
        )
    }
}

const styleForm = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    marginTop: '20px',
    fontSize: '16px'
  }