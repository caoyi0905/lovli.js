import React from 'react';
import { subscribe } from 'horizon-react';

import TodoItem from './TodoItem';

import styles from './styles';

const mapDataToProps = {
  todos: (hz, props) => hz('todos').order(props.sortField, props.direction).limit(props.limit)
};

const TodoList = (props) => (
  <div>
    <ul className={styles.list} style={{ height: props.todos.length * 49 }}>
      {props.todos.map(
        todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            horizon={props.horizon}
          />
        )
      )}
    </ul>
  </div>
);

export default subscribe({
  mapDataToProps
})(TodoList);
