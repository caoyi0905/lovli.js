import React, { Component } from 'react';
import { deleteDoc } from 'horizon-react/lib/utils';

import styles from './styles';
import TimeAgo from 'timeago-react';

/**
 * A single todo list item.
 *
 * Includes a remove action.
 *
 * @param  {Object} todo    The todo item
 * @param  {Object} horizon The horizon object which will be passed to deleteDoc
 * @return {ReactElement}
 */
export default class TodoItem extends Component {

  constructor(props, context) {
    super(props, context);

  }

  _removeTodo = () => {
    let {curPage, dispatch, horizon, todo} = this.props;
    deleteDoc(horizon('todos'), { id: todo.id });
    //TODO: fresh the page
  }


  render() {
    let {todo, horizon, curPage} = this.props;
    return (
      <li className={styles.item} key={todo.id}>
        <span className={styles.caption}>{todo.text || '-'}</span>
        <TimeAgo className={styles.timeago} datetime={todo.datetime} />
        <span className={styles.actions}>
          <i
            className="fa fa-remove"
            onClick={this._removeTodo.bind(this)}
            />
        </span>
      </li>
    );
  }
}
