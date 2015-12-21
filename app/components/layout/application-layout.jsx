import React, { Component } from 'react';
import classnames from 'classnames';
import DrawerMenu from './drawer-menu';
import layoutClassNames from './application-layout.css';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#eee',
    transition: 'transform 0.3s ease-in-out'
  },
  header: {
    height: 64,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#4CAF50',
    color: '#fff'
  },
  menuBtn: {
    height: 64,
    padding: 20
  },
  headerText: {
    flex: 1,
    height: 64,
    padding: 20
  },
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff'
  }
}

export default class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerMenuOpen: false,
      pageName: 'Dashboard'
    };
  }

  render() {
    const { isDrawerMenuOpen } = this.state;
    let classNames = isDrawerMenuOpen ? layoutClassNames['is-drawer-menu-opened'] : undefined;

    return <div className={classNames} style={styles.container}>
      <header style={styles.header}>
        <span style={styles.menuBtn} onClick={() => this.setState({ isDrawerMenuOpen: !isDrawerMenuOpen })}>Menu</span>
        <span style={styles.headerText}>{this.state.pageName}</span>
      </header>

      <section style={styles.body}>
        {this.props.children}
      </section>

      <DrawerMenu />
    </div>
  }
}
