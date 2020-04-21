import React, { Component } from 'react';
import axios from 'axios';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    todo_description: response.data.todo_description,
                    todo_responsible: response.data.todo_responsible,
                    todo_priority: response.data.todo_priority,
                    todo_completed: response.data.todo_completed
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };
        console.log(obj);
        axios.post('http://localhost:4000/todos/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h3 align="center">Edit Todo</h3><br/>
                <FormControl onSubmit={this.onSubmit} style={{width:"512px"}}>
                    
                        <label>제목: </label>
                        <Input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                /><br/>
                   
                        <label>작성자: </label>
                        <Input 
                                type="text" 
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                /><br/>
                  
                         <label className="form-check-label">Java</label>
                            <Checkbox  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityJava" 
                                    value="Java"
                                    checked={this.state.todo_priority==='Java'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                          
                       
                            <label className="form-check-label">JavaScript</label>
                            <Checkbox  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityJavaScript" 
                                    value="JavaScript" 
                                    checked={this.state.todo_priority==='JavaScript'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                           
                       
                            <label className="form-check-label">React</label>
                            <Checkbox  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityReact" 
                                    value="React" 
                                    checked={this.state.todo_priority==='React'} 
                                    onChange={this.onChangeTodoPriority}
                                    />
                           
                      
                  
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>          
                        <Checkbox  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.todo_completed}
                                value={this.state.todo_completed}
                                />
                                     
                   

                    <br />

                   
                        <Button type="submit" value="Update Todo" className="btn btn-primary" variant="contained" color="secondary">Edit</Button>
                  
                </FormControl>
            </div>
        )
    }
}