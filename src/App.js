import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HomePage from "./components/home.component";
import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodosList from "./components/todos-list.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div style={{background:"#9499bb",height:"50px",textAlign:"center",padding:"2rem"}}>
           <Link to="/home" className="navbar-brand" 
           style={{color:"white",textDecoration:"none"
           ,marginLeft:"-5%",fontWeight:"bold",fontSize:"25px"}}>Home</Link>
           <Link to="/board" className="nav-link" 
           style={{color:"white",textDecoration:"none"
           ,marginLeft:"10%",fontWeight:"bold",fontSize:"25px"}}>Board</Link>  
           <Link to="/create" className="nav-link" 
           style={{color:"white",textDecoration:"none"
           ,marginLeft:"10%",fontWeight:"bold",fontSize:"25px"}}>Insert</Link>
        </div>   
         
          <br/>
          <Route path="/home" exact component={HomePage} />
          <Route path="/board" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
     
      </Router>
    );
  }
}

export default App;