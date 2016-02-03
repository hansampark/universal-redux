import React, { Component } from 'react';
import { Chart } from 'react-d3-core';
import { LineChart } from 'react-d3-basic';
import Page from '../page';
import styles from './graph-page.scss';
import CHART_DATA from '../../fixtures/user.sample';

export default class GraphPage extends Component {
  render() {
    var width = 700,
      height = 300,
      margins = {left: 100, right: 100, top: 50, bottom: 50},
      title = "User sample",
      // chart series,
      // field: is what field your data want to be selected
      // name: the name of the field that display in legend
      // color: what color is the line
      chartSeries = [
        {
          field: 'BMI',
          name: 'BMI',
          color: '#ff7f0e'
        }
      ],
      // your x accessor
      x = function(d) {
        return d.index;
      }
    return <Page title="Graph">
      <h1>D3</h1>

      <section>
        <Chart
          title={title}
          width={width}
          height={height}
          margins= {margins}>
          <LineChart
            showXGrid= {false}
            showYGrid= {false}
            margins= {margins}
            title={title}
            data={CHART_DATA}
            width={width}
            height={height}
            chartSeries={chartSeries}
            x={x}
          />
        </Chart>
      </section>
    </Page>;
  }
}
