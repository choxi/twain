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

        <div className="Section Section--alt">
          <p class="Text--quote">
            The difference between the right word and the almost right word
            is the difference between lightning and a lightning bug.
          </p>
          <p class="Text--quote">
            &mdash; Mark Twain
          </p>
        </div>

        <div className="Section">
          <div className="Features">
            <div className="Features__feature">
              <div className="Badge">1</div>
              <p>Submit a draft to Twain to be reviewed by a professional copy editor.</p>
            </div>
            <div className="Features__feature">
              <div className="Badge">2</div>
              <p>Our editors <span class="Highlight">will review your draft for spelling</span>, grammar, clarity, conciseness, style, and structure.</p>
            </div>
            <div className="Features__feature">
              <div className="Badge">3</div>
              <p>Receive a draft with highlighted comments and annotated feedback.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
