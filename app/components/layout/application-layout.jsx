import React, { Component } from 'react';
import cx from 'classnames';
import DrawerMenu from './drawer-menu';
import styles from './application-layout.scss';

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
    const style = isDrawerMenuOpen
                ? { transform: 'translate3d(220px, 0, 0)' }
                : undefined;

    return (
      <div className={styles.container} style={style}>
        <header className={styles.header}>
          <span
            className={styles.menuBtn}
            onClick={this._handleMenuClick}>
            Menu
          </span>
          <span className={styles.headerText}>{this.state.pageName}</span>
        </header>

        <section className={styles.body}>
        {this.props.children}
        </section>

        <DrawerMenu />
      </div>
    );
  }

  _handleMenuClick = (e) => {
    this.setState({ isDrawerMenuOpen: !this.state.isDrawerMenuOpen });
  };
}
