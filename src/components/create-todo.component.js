import React, { Component } from 'react';
import axios from 'axios';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { blue } from '@material-ui/core/colors';


export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
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

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
     
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        };

        axios.post('http://localhost:4000/todos/add', newTodo)
            .then(res => console.log(res.data));

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 10,textAlign:"center"}}>
                <h3>Write New Todo</h3>
                <FormControl onSubmit={this.onSubmit} style={{width:"512px"}}>
               
                        <label>제목: </label>
                        <Input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                /><br/><br/><br/>
               
                        <label>작성자: </label>
                        <Input 
                                type="text" 
                                className="form-control"
                                value={this.state.todo_responsible}
                                onChange={this.onChangeTodoResponsible}
                                /><br/><br/><br/>
            
                        <label className="form-check-label">Java</label>
                            <Checkbox  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Java"
                                    checked={this.state.todo_priority==='Java'} 
                                    onChange={this.onChangeTodoPriority}
                                    /><br/><br/><br/>
                           
                 
                           <label className="form-check-label">JavaScript</label>
                            <Checkbox  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="JavaScript" 
                                    checked={this.state.todo_priority==='JavaScript'} 
                                    onChange={this.onChangeTodoPriority}
                                    /><br/><br/><br/>
                            
              
                            <label className="form-check-label">React</label>
                            <Checkbox  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="React" 
                                    checked={this.state.todo_priority==='React'} 
                                    onChange={this.onChangeTodoPriority}
                                    /><br/><br/><br/>
                           


                  
                        <Button type="submit" value="Create Todo" className="btn btn-primary" variant="contained" color="secondary">Save</Button>
          
                </FormControl>
            </div>
        )
    }
}