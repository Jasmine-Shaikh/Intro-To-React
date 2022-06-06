import React from "react";
import ReactDOM from "react-dom"
import './App.css';

function TodoTask({task}){
  return <li>{task}</li>
  
}

function App() {
  return (
    <div className="App">
      <h2>Mobile Operating Systems</h2>
      <ul>
      {
        ["Android","Blackberry","iPhone","Windows Phone"].map((task)=>{
          return <TodoTask task={task}/>
        })
        }
      </ul>
      <h2>Mobile Manufactures</h2>
      <ul>{
        ["Samsung","HTC","Micromax","Apple"].map((task)=>{
          return <TodoTask task={task}/>
        })
        }
       
      </ul>
      
    </div>
  );
}

export  {App};
