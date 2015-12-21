import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import shallowCompare from 'react-addons-shallow-compare';
import classNames from './drawer-menu.css';

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    width: 220,
    backgroundColor: 'rgba(0,0,0,0.8)',
    color: '#fff',
    transform: 'translate3d(-100%, 0, 0)'
  },
  header: {
    boxSizing: 'border-box',
    height: 64,
    padding: 20
  },
  body: {
    flex: 1
  },
  footer: {
    height: 64
  }
};

export default class DrawerMenu extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render () {
    return <aside style={styles.container}>
      <header style={styles.header}>
        Menu
      </header>

      <section style={styles.body}>
        <ul className={classNames['menu-list']}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </section>

      {this.props.footer && <footer style={styles.footer}>{this.props.footer}</footer>}
    </aside>
  }
}
