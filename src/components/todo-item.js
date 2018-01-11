import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item">
        
        <div class="custom-control custom-checkbox">
          <input type="checkbox"/>
          {this.props.todo.title}
        </div>
      </li>

    );
  }
} 

export default TodoItem;