import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './App.scss'

export default class App extends Component {
  render() {
    return (
      <div className="Twain">
        <div className="Jumbotron">
          <h1 className="Header Header--title">Twain</h1>
          <h2 className="Header Header--secondary pull-up">Professional copy-editing as a service</h2>
        </div>
      </div>
    )
  }
}
