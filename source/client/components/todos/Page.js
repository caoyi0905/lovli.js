import React, { Component } from 'react';
import { subscribe } from 'horizon-react';

import TodoItem from './TodoItem';

import styles from './styles';

import { prePage, nextPage, setPage } from '../../actions';

const mapDataToProps = {
    todos: (hz, props) => hz('todos'),
};


class Page extends Component {
    constructor(props, context) {
        super(props, context);

    }

    _pageClickHandler(page) {
        let {curPage, dispatch} = this.props;
        dispatch(setPage(page));
    }

    _getPrePageHandler() {
        let {curPage, dispatch} = this.props;
        dispatch(prePage());
    }

    _getNextPageHandler() {
        let {curPage, dispatch} = this.props;
        dispatch(nextPage());
    }

    render() {
        let total = this.props.todos.length;
        let pageSize = Math.ceil(total / 3);
        let {curPage} = this.props;
        let pageList = [];
        let startPage = Math.min(Math.max(1, curPage - 2), Math.max(1, pageSize - 4));
        for (let i = startPage; i <= Math.min(pageSize, startPage + 4); i++) {
            pageList.push(i);
        }
        let hasPre = pageList.length > 0 && pageList[0] != 1;
        let hasNext = pageList.length > 0 && pageList[pageList.length - 1] != pageSize;
        console.log(pageList, pageSize);
        console.log(this.props.horizon('todos').limit(10).watch({ rawChanges: true }));
        return (
            <div className={styles.page}>
                <p className={styles.todoSize}>
                    {total + ' todos!'}
                </p>
                <ul className={styles.pageul}>
                    {
                        (hasPre) ?
                            <li className={styles.pageli}>
                                <a href="#" onClick={this._getPrePageHandler.bind(this)}>
                                    <span> &lt;&lt; </span>
                                </a>
                            </li>
                            : null
                    }
                    {pageList.map(
                        page => (
                            <li className={styles.pageli + ' ' + (page == curPage ? styles.active : '')} key={page}>
                                <a href="#" onClick={this._pageClickHandler.bind(this, page)}>
                                    <span>{page}</span>
                                </a>
                            </li>
                        )
                    )}
                    {
                        (hasNext) ?
                            <li className={styles.pageli}>
                                <a href="#" onClick={this._getNextPageHandler.bind(this)}>
                                    <span> &gt;&gt; </span>
                                </a>
                            </li>
                            : null
                    }
                </ul>
            </div>
        );
    }

}

export default subscribe({
    mapDataToProps
})(Page);
