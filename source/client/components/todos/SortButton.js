import React from 'react';
import { subscribe } from 'horizon-react';

import styles from './styles';

import { setOrderName } from '../../actions';
import { prePage, nextPage, initPage } from '../../actions';

const SortButton = (props) => {

  return (
    <div>
      <div
        className={styles.sortButton}
        onClick={() => { props.dispatch(setOrderName('text')); props.dispatch(initPage(1)); }}
        {/* when click the sort button,we should initialize the page */}
      >
      Sorted by name
      </div>
      <div
        className={styles.sortButton}
        onClick={() => { props.dispatch(setOrderName('datetime')); props.dispatch(initPage(1)); }}
      >
      Sorted by time
      </div>
    </div>
  );
};

export default subscribe()(SortButton);
