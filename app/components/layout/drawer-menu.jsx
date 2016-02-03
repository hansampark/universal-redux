import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';
import styles from './drawer-menu.scss';

export default class DrawerMenu extends Component {
  static propTypes = {
    footer: PropTypes.object
  };

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <aside className={styles.container}>
        <header className={styles.header}>
        Menu
        </header>

        <section className={styles.body}>
          <ul className={styles['menu-list']}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/graph">Graph</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </section>

        {this.props.footer &&
        <footer className={styles.footer}>
        {this.props.footer}
        </footer>
        }
      </aside>
    );
  }
}
