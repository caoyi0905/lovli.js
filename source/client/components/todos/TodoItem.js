import React from 'react';
import { deleteDoc } from 'horizon-react/lib/utils';

import styles from './styles';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

/**
 * A single todo list item.
 *
 * Includes a remove action.
 *
 * @param  {Object} todo    The todo item
 * @param  {Object} horizon The horizon object which will be passed to deleteDoc
 * @return {ReactElement}
 */
export default ({ todo, horizon }) => (
  <li className={styles.item} key={todo.id}>
    <span className={styles.caption}>{todo.text || '-'}</span>
    <TimeAgo className={styles.timeago} datetime={todo.datetime}/>
    <span className={styles.actions}>
      <i
        className="fa fa-remove"
        onClick={() => {
          deleteDoc(horizon('todos'), { id: todo.id });
        }}
      />
    </span>
  </li>
);
