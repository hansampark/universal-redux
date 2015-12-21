import React, { Component } from 'react';
import Card from '../card';
const CARDS = [
  {
    id: 1,
    name: 'AAAA',
    imgSrc: 'http://placehold.it/300x150'
  },
  {
    id: 2,
    name: 'BBBB',
    imgSrc: 'http://placehold.it/300x150'
  },
  {
    id: 3,
    name: 'CCCC',
    imgSrc: 'http://placehold.it/300x150'
  },
  {
    id: 4,
    name: 'DDDD',
    imgSrc: 'http://placehold.it/300x150'
  },
];

export default class HomePage extends Component {
  render() {
    return <div style={{ backgroundColor: '#fff' }}>
      <section className="page-body">
        <ul className="grid" style={{ listStyle: 'none', padding: 0, textAlign: 'center' }}>
          {CARDS.map( (card) => {
            return <li key={card.id} style={{ display: 'inline-block', width: 300 }}>
              <Card {...card}
                onHeaderClick={this._handleCardHeaderClick}
                onClick={this._handleCardClick}
              />
            </li>;
          }, this)}
        </ul>
      </section>
    </div>;
  }

  _handleCardHeaderClick(id) {
    // TODO: Go to edit page
  }

  _handleCardClick(id) {
    // TODO: Go to
  }
}
