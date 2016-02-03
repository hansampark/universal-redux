import React, { Component, PropTypes } from 'react';
import styles from './page.scss';

export default class Page extends Component {
  static contextTypes = {
    onPageMount: PropTypes.func
  };

  static propTypes = {
    title: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return <div className={styles.page}>
      <section className={styles.body}>
        {this.props.children}
      </section>
    </div>;
  }

  componentDidMount() {
    const { onPageMount } = this.context;
    const { title } = this.props;

    if (onPageMount && typeof title ==='string') {
      onPageMount(title);
    }
  }
}
