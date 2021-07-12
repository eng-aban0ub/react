import './App.css';
import React, {Component} from 'react';
import ListItems from './Components/ListItems';
import AddItem from './Components/AddItem';

class App extends Component {
  state={
    items :[
      {id:1 ,name : "abanoub",age:25},
      {id:2 ,name : "mostafa",age:27},
      {id:3 ,name : "ali",age:29},
    ]
  };
  deleteItem = (id) =>{  
    const newItems = this.state.items.filter((item)=>{
      if(item.id !== id)
      return item
    })
    this.setState({items : newItems})
  }
  addItem = (item)=>{
    if ((item.name && item.age) != ""){
    console.log("additem function")
    let items =this.state.items;
    const id = items.length + 1;
    console.log(this.state.items);
    console.log(id);
    items.push({id,name:item.name,age:item.age});
    this.setState({items})
  }}
  

  render(){
  return (
    <div className="App">
    <h1>todo list</h1>
    <table>
      <thead>
        <tr>
        <th>name</th>
        <th>age</th>
        <th>remove</th>
        </tr>
      </thead>
      <tbody>
    <ListItems items={this.state.items} deleteItem={this.deleteItem}/>
    </tbody>
    <tfoot>
    <AddItem addItem={this.addItem}/>
    </tfoot>
    </table>
    </div>
  );
  }
};

export default App;
