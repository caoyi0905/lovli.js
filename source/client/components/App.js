import React, { Component } from 'react';
import { connect } from 'react-redux';

import Logo from './Logo';
import SortButton from './todos/SortButton';
import TodoList from './todos/TodoList';
import AddTodoButton from './todos/AddTodoButton';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import styles from 'styles/app';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { props } = this;
    let above = {};
    let below = {};
    if (props.direction === 'ascending') {
      above = {
        above: {
          [props.sortField]: props.content
        },
        option: (props.action === 'next') ? 'open' : 'closed'
      };
    } else {
      below = {
        below: {
          [props.sortField]: props.content
        },
        option: (props.action === 'next') ? 'open' : 'closed'
      };
    }
    return (
      <div>
        <div className={styles.container}>
          <Logo />
          <p className={styles.tCenter}>
            <b>Welcome.</b>
            <br />
            You're connected to <a href="https://github.com/rethinkdb/horizon" target="_blank">horizon</a>.
          </p>
          <SortButton />
          <TodoList above={above} below={below} limit={3} sortField={props.sortField} direction={props.direction} curPage={props.curPage} />
          <AddTodoButton />
          <div className={styles.footer}>
            ToDos are deleted automatically every 10 minutes.
        <br /><br />
            built with <i className="fa fa-heart" /> by <a href="https://github.com/flipace" target="_blank">@flipace</a>
          </div>
        </div>
        <div className={styles.social}>
          <iframe
            src="https://ghbtns.com/github-btn.html?user=flipace&repo=lovli.js&type=star&count=true"
            frameBorder="0"
            scrolling="0"
            width="85px"
            height="20px"
            />
          <iframe
            src="https://ghbtns.com/github-btn.html?user=flipace&repo=lovli.js&type=fork&count=true"
            frameBorder="0"
            scrolling="0"
            width="85px"
            height="20px"
            />
        </div>
      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    sortField: state.sortParams.sortField,
    direction: state.sortParams.direction,
    curPage: state.page.curPage,
    content: state.page.content,
    action: state.page.action
  };
}

export default connect(mapStateToProps)(App);
