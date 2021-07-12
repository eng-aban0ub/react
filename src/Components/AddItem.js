import React,{Component} from 'react'; 

class AddItem extends Component {
    state ={
        name : '' ,
        age : ''
    };
    handleChange=(e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
        console.log(this.state[e.target.id]);
        
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.props.addItem(this.state);
        this.setState({name : '' ,age : ''});
    }
    render(){
        return (
            <>
               <tr>
                    <td><input 
                    type="text" 
                    id="name" 
                    value={this.state.name}
                    placeholder="Enter Name" 
                    onChange={(e)=>this.handleChange(e)} /></td>
                    <td><input 
                    type="number" 
                    id="age" 
                    value={this.state.age}
                    placeholder="Age" 
                    onChange={(e)=>this.handleChange(e)} /></td>
                    <td><input className="button" onClick={this.handleClick} type="submit" value="Add Item"  /></td>
                </tr>
             </>
        )
    }
}
export default AddItem;