import React, { Component } from 'react';

import AddForm from '../containers/add_form';
import TodosList from '../containers/todos_list';


class App extends Component {
  render() {
    return (
      <div className="container">
        <AddForm />
        <TodosList />
      </div>
    );
  }
}

export default App;
