import React, { Component, PropTypes } from 'react'
import styles from './card.scss';

export default class Card extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    title: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    onHeaderClick: PropTypes.func,
    onClick: PropTypes.func
  };

  render() {
    const {
      id, title, imgSrc, onHeaderClick, onClick
    } = this.props;

    return <div className={styles.card}>
      <header className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <button
          type="button"
          className={styles.btn}
          onClick={this._handleHeaderClick}>
          <span className={styles.chevron}>&gt;</span>
        </button>
      </header>
      <section className={styles.content} onClick={this._handleClick}>
        <img src={imgSrc} alt={title} className={styles.image} />
      </section>
    </div>;
  }

  _handleHeaderClick = () => {
    const { id, onHeaderClick } = this.props;
    onHeaderClick && onHeaderClick(id);
  };

  _handleClick = () => {
    const { id, onClick } = this.props;
    onClick && onClick(id);
  };
}
