import React from 'react';
import { subscribe } from 'horizon-react';
import { createDoc } from 'horizon-react/lib/utils';

import styles from './styles';

import {setOrderName} from '../../actions';

const SortButton = (props) => {

  return (
    <div>
      <div
        className={styles.sortButton}
        onClick={() => { props.dispatch(setOrderName('text')) }}
      >
      Sorted by name
      </div>
      <div
        className={styles.sortButton}
        onClick={() => { props.dispatch(setOrderName('datetime')) }}
      >
      Sorted by time
      </div>
    </div>
  );
};

export default subscribe()(SortButton);
