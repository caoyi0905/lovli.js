import React from 'react';
import { subscribe } from 'horizon-react';

import Page from './Page';
import TodoItem from './TodoItem';

import styles from './styles';

const mapDataToProps = {
  todos: (hz, props) => {
    if (props.above.hasOwnProperty('above')) {
      if (props.above.above.text === '' || props.above.above.datetime === '') {
        // the first page do not use above
        return hz('todos').order(props.sortField, props.direction).limit(props.limit);
      }
      return hz('todos').order(props.sortField, props.direction)
        .above(props.above.above, props.above.option).limit(props.limit);
    } else {
      if (props.below.below.text === '' || props.below.below.datetime === '') {
        // the first page do not use below
        return hz('todos').order(props.sortField, props.direction).limit(props.limit);
      }
      return hz('todos').order(props.sortField, props.direction)
        .below(props.below.below, props.below.option).limit(props.limit);
    }
  }
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
            dispatch={props.dispatch}
            />
        )
      )}
    </ul>
    <Page curPage={props.curPage} todos={props.todos} limit={props.limit} sortField={props.sortField}/>
  </div>
);


export default subscribe({
  mapDataToProps
})(TodoList);
