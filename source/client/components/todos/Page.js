import React, { Component } from 'react';
import { subscribe } from 'horizon-react';

import styles from './styles';

import { prePage, nextPage } from '../../actions';

class Page extends Component {

  constructor(props, context) {
    super(props, context);
    this.memory = [];
  }

  render() {
    const { curPage, todos, limit, sortField } = this.props;
    const hasPre = curPage !== 1;
    const hasNext = todos.length === limit;
    if (todos.length > 0) {
      this.memory[curPage] = todos[0][sortField];
    }
    return (
      <div className={styles.page}>
        <ul className={styles.pageul}>
          {
            (hasPre) ?
              <li className={styles.pageli}>
                <a href="#" onClick={this.getPrePageHandler.bind(this)}>
                  <span> &lt;&lt; </span>
                </a>
              </li>
              : null
          }
          <li className={styles.pageli}>
            <span> {`${curPage} Page`} </span>
          </li>
          {
            (hasNext) ?
              <li className={styles.pageli}>
                <a href="#" onClick={this.getNextPageHandler.bind(this)}>
                  <span> &gt;&gt; </span>
                </a>
              </li>
              : null
          }
        </ul>
      </div>
    );
  }

  getPrePageHandler() {
    const { dispatch, curPage } = this.props;
    dispatch(prePage(this.memory[curPage - 1]));
  }

  getNextPageHandler() {
    const { dispatch, todos, sortField } = this.props;
    const lastText = todos[todos.length - 1][sortField];
    dispatch(nextPage(lastText));
  }

}

export default subscribe({})(Page);
