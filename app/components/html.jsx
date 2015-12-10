import React, { Component, PropTypes } from 'react'

export default class HTML extends Component {
  static propTypes = {
    head: PropTypes.object,
    body: PropTypes.array,
    assets: PropTypes.shape({
      styles: PropTypes.array,
      scripts: PropTypes.array
    })
  }

  static defaultProps = {
    head: {},
    body: [],
    assets: {
      styles: [],
      scripts: []
    }
  }

  constructor(props) {
    super(props)

  }

  render() {
    return <html>
      <head>
        {this.props.assets.styles}
      </head>
      <body>
        {this.props.body}
        {this.props.assets.scripts}
      </body>
    </html>
  }
}
