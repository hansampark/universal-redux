import React, { Component, PropTypes } from 'react'

export default class Card extends Component {
  static propTypes = {
    id: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]).isRequired,
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    onHeaderClick: PropTypes.func,
    onClick: PropTypes.func
  }

  render() {
    const {
      id, name, imgSrc, onHeaderClick, onClick
    } = this.props;

    return <div className="card" style={{ backgroundColor: '#ddd' }}>
      <header>
        <div style={{ display: 'flex' }}>
          <h2 className="card-name" style={{ flex: 1 }}>{name}</h2>
          <button
            type="button"
            className="edit-btn"
            style={{ width: 30 }}
            onClick={() => onHeaderClick && onHeaderClick(id)}>
            <span>&gt;</span>
          </button>
        </div>
      </header>
      <section className="customer-logo-container" onClick={() => onClick && onClick(id)}>
        <img src={imgSrc} alt={name} />
      </section>
    </div>;
  }
}
