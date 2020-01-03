import React, { Component } from 'react';
import axios from 'axios';

export default class SubmitNote extends Component {
    constructor() {
        super()
        this.change = this.change.bind(this);
        this.submit = this.submit.bind(this);
    }
    state = {
        
    }

    change = (e) => {
        let name = e.target.name;
        let val = e.target.value;
        this.setState({[name]: val});
    }

    submit = (e) => {
        e.preventDefault();
        var today = new Date();
        var date = today.getDate()+ '/' +(today.getMonth()+1) + '/' + today.getFullYear();
        const note = {
            title: this.state.title,
            description: this.state.desc,
            date: date
          };
        axios.post(`http://localhost:8000/notes`, note)
        .then(res => {
          console.log(res);
          console.log('res.data');
        })

    }


    render() {
        return (
            <div className="mt-2 border border-light p-3 col-12">
            <form className="col-8">
          <div className="form-group">
            <input name="title" type="text" className="form-control" id="recipient-name" placeholder="Title" onChange={this.change}/>
          </div>
          <div className="form-group">
            <textarea name="desc" className="form-control" placeholder="Description" id="message-text" onChange={this.change}></textarea>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.submit}>Submit</button>
        </form>
            </div>
        )
    }
}

