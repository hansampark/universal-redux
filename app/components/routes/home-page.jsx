import React, { Component } from 'react';
import Card from '../card';
const customers = [
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
    return <div style={{ backgroundColor: '#ccc' }}>
      <header className="page-header">
        <h2>Choose Customer</h2>
      </header>

      <section className="page-body">
        <ul className="customer-grid" style={{ listStyle: 'none', padding: 0 }}>
          {customers.map( (customer) => {
            return <li key={customer.id}>
              <Card {...customer}
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
