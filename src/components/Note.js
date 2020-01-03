import React, { Component } from 'react';
import axios from 'axios';

export default class Note extends Component {

  constructor(props){
    super(props)
    this.state={ title:this.props.noteTitle,
    description:this.props.noteDesc,
    date:this.props.date,
  Isdisabled:true}
    this.editNote = this.editNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.goUpdate = this.goUpdate.bind(this);
  }


  deleteNote=(id,e)=>{
   axios.delete(`http://localhost:8000/notes/` + id).then() 
  }

 editNote=(e)=>{
{e.target.name==="title" ? this.setState({title:e.target.value}) : this.setState({description:e.target.value})}
}

updateNote=()=>{
  this.setState({Isdisabled:!this.state.Isdisabled});
}

cancelNote=()=>{
  this.setState({title:this.props.noteTitle,description:this.props.noteDesc,Isdisabled:!this.state.Isdisabled})
}

goUpdate=(e)=>{
  var today = new Date();
  var date = today.getDate()+ '/' +(today.getMonth()+1) + '/' + today.getFullYear();
  var note={
    title:this.state.title,
    description: this.state.description,
    date:date
  }
  e.preventDefault();
  const config = { headers: {'Content-Type': 'application/json'} };
  axios.put(`http://localhost:8000/notes/` + this.props.id, note, config)
  .then(res => {
    console.log(res);
    console.log('res.data');
  })
}

    render() {
        return (
<div className="col-md-3 my-2"> 
<div className="card">
  <div className="card-body">
    <h5 className="card-title"><input name="title" type="text" className="form-control cust-disabled" value={this.state.title} onChange={this.editNote} disabled = {(this.state.Isdisabled)? "disabled" : ""} /></h5>
    <p className="card-text"><textarea name="desc" className="form-control cust-disabled" value={this.state.description} id="message-text" onChange={this.editNote} disabled = {(this.state.Isdisabled)? "disabled" : ""} ></textarea></p>
    <p className="card-text"><i className="fa fa-calendar" aria-hidden="true"></i> : {this.state.date}</p>
    { this.state.Isdisabled ? <button className="btn btn-success btn-sm" onClick={this.updateNote}>Edit</button>
    : <span><button className="btn btn-primary btn-sm" onClick={this.goUpdate}>Update</button> <button className="btn btn-dark btn-sm" onClick={this.cancelNote}>Cancel</button></span>}
    <button className="btn btn-danger ml-2 btn-sm" onClick={this.deleteNote.bind(this, this.props.id)}>Delete</button>
  </div>
</div>
</div>
        )
    }
}
