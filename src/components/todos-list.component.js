import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';

const Todo = props => (
    <TableRow>
        <TableCell>{props.todo.todo_responsible}</TableCell>
        <TableCell>{props.todo.todo_description}</TableCell>
        <TableCell>{props.todo.todo_priority}</TableCell>
        <TableCell>
        <Link to={"/edit/"+props.todo._id} style={{textDecoration:"none"}}><Button variant="contained" color="secondary">수정</Button></Link>
        </TableCell>
    </TableRow>
)

export default class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({ todos: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    todoList() {
        return this.state.todos.map(function(currentTodo, i){
            return <Todo todo={currentTodo} key={i} />;
        })
    }

    render() {
        return (
            <div style={{textAlign:"center"}}>
                <h1>TodoList</h1>
                <Table className="table table-striped" style={{ marginTop: 20 }} >
                    <TableHead>
                        <TableRow>
                            <TableCell>작성자</TableCell>
                            <TableCell>제목</TableCell>
                            <TableCell>사용기술</TableCell>
                            <TableCell>수정</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        { this.todoList() }
                    </TableBody>
                </Table>
            </div>
        )
    }
}