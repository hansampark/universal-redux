import React, { Component } from 'react';
import Page from '../page';
import Card from '../card';
import styles from './home-page.scss';

const CARDS = [
  {
    id: 1,
    title: 'AAAA',
    imgSrc: 'http://placehold.it/300x150'
  },
  {
    id: 2,
    title: 'BBBB',
    imgSrc: 'http://placehold.it/300x150'
  },
  {
    id: 3,
    title: 'CCCC',
    imgSrc: 'http://placehold.it/300x150'
  },
  {
    id: 4,
    title: 'DDDD',
    imgSrc: 'http://placehold.it/300x150'
  },
];

export default class HomePage extends Component {
  render() {
    return <Page title="Home">
      <section className="page-body">
        <ul className={styles.grid}>
          {CARDS.map(card => {
            return <li key={card.id} className={styles['grid-item']}>
              <Card
                {...card}
                onHeaderClick={this._handleCardHeaderClick}
                onClick={this._handleCardClick}
              />
            </li>;
          })}
        </ul>
      </section>
    </Page>;
  }

  _handleCardHeaderClick(id) {
    // TODO: Go to edit page
  }

  _handleCardClick(id) {
    // TODO: Go to
  }
}
