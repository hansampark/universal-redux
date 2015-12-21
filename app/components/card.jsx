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

    return <div className="card" style={{ margin: 10, backgroundColor: '#fff', boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)' }}>
      <header style={{ backgroundColor: '#fff', color: '#3f3f3f' }}>
        <div style={{ display: 'flex', padding: 10, borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
          <h4 className="card-name" style={{ flex: 1, margin: 0, textAlign: 'left' }}>{name}</h4>
          <button
            type="button"
            className="edit-btn"
            style={{ width: 30, border: 'none', backgroundColor: 'transparent' }}
            onClick={() => onHeaderClick && onHeaderClick(id)}>
            <span style={{ transform: 'scaleY(2)' }}>&gt;</span>
          </button>
        </div>
      </header>
      <section className="card-content" style={{ padding: 10 }} onClick={() => onClick && onClick(id)}>
        <img src={imgSrc} alt={name} style={{ width: '100%', height: 'auto' }} />
      </section>
    </div>;
  }
}
