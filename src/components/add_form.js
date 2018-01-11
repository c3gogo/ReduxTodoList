import React, { Component } from 'react';

class AddForm extends Component {

  constructor(props) {
    super(props);

    this.state = { term: ''}

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  render() {

    return (
      <div>
        <form>
          <div className="form-group">
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Add Todo" value={this.state.term} onChange={this.onInputChange} />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="submit">Add</button>
                </div>
            </div>
          </div>
        </form>
      </div>
    );

  };

}

export default AddForm;