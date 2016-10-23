import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Logo from './Logo';
import SortButton from './todos/SortButton';
import TodoList from './todos/TodoList';
import Page from './todos/Page';
import AddTodoButton from './todos/AddTodoButton';

import 'static/vendor/font-awesome/css/font-awesome.min.css';
import styles from 'styles/app';
import DevTools from '../containers/DevTools';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    const {props} = this;
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
          <TodoList curPage={props.curPage} limit={3} sortField={props.sortField} direction={props.direction} />
          <Page curPage={props.curPage} />
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
        <DevTools />
      </div>
    );
  }

}


function mapStateToProps(state) {
  return {
    sortField: state.sortParams.sortField,
    direction: state.sortParams.direction,
    curPage: state.page.curPage,
  }
}

export default connect(mapStateToProps)(App);
