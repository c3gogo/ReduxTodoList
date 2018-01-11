import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions/index'; 

class AddForm extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''}

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.addTodo(this.state.term);
    this.setState({
      term: ''
    });
    
  }

  render() {

    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group" >
          <input type="text" className="form-control" placeholder="Add Todo" value={this.state.term} onChange={this.onInputChange} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="submit">Add</button>
          </div>
        </form>
      </div>
    );

  };

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(AddForm);