import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Note from './Note';
export default class Notes extends Component {

    state = {
        notes: [],
        filteredNotes: [],
        filterDate:false
      }

    componentDidMount() {
        axios.get(`http://localhost:8000/notes`)
          .then(res => {
            const notes = res.data;
            console.log(res.data);
            this.setState({ notes,filteredNotes:notes});
          })
      }

      filterNotes(){
        if(!this.state.filterDate){
        var testFilter=this.state.filteredNotes.map(item=>{
          let date = item.date.replace(/\//gi," ");
          item.date = Date.parse(date);
          return item;
        }).sort((a, b) => b.date - a.date)
        this.setState({filteredNotes:testFilter,filterDate:true});
      }
      else{
        this.setState({filteredNotes:this.state.notes,filterDate:false});
      }
      }

    render() {
        return (
            <Fragment>
            <div className="container mt-2"> 
            <div className="row">
            {this.state.filteredNotes.map((note,index)=>(
            <Note noteTitle={note.title} noteDesc={note.description} id={note.id} date={note.date} key={note.id} />
            ))
              }
            </div>
            </div>
            </Fragment>
        )
    }
}
