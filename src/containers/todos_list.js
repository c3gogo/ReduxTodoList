import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from '../components/todo-item';



class TodosList extends Component {


  renderTodos(todo) {
    return (
      <TodoItem todo={todo} />
    );
  }

  render() {
    return(
      <div>
        <h3 className="display-7">Todo List</h3>
        <ul className="list-group">
          {this.props.todos.map(this.renderTodos)}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

export default connect(mapStateToProps)(TodosList)