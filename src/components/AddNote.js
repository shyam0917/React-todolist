import React, { Component } from 'react'
import SubmitNote from './SubmitNote';

export default class AddNote extends Component {

    constructor(){
        super();
        this.state={
        isAddNote:false    
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.filterForm = this.filterForm.bind(this);
    }

    toggleForm(){
		this.setState({isAddNote: !this.state.isAddNote});
    }

    filterForm(){
    this.props.onChild();
    }

    render() {
        return (
                <div className="col-md-12">
                    <div className="row">
  <div className="col-md-8"><button type="button" className="btn btn-primary btn-md btn-block mt-2" onClick={this.toggleForm}>ADD NOTE {this.state.isAddNote===true ? <i className="fa fa-caret-up" aria-hidden="true"></i> : <i className="fa fa-caret-down" aria-hidden="true"></i>}</button></div>
  <div className="col-md-2"><button type="button" className="btn btn-primary btn-md btn-block mt-2" onClick={this.filterForm}><i className="fa fa-filter" aria-hidden="true"></i> By Date</button></div>
  </div>
            {this.state.isAddNote && <SubmitNote />}
            </div>
        )
    }
}
