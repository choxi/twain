import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Airtable from 'airtable'

import './App.scss'

const db = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(process.env.AIRTABLE_BASE)
const subscriptions = db(process.env.AIRTABLE_SUBSCRIPTIONS_TABLE)

export default class App extends Component {
  state = { subscribed: false }

  subscribe = () => {
    const email = this.emailInput.value
    subscriptions.create({ email }, (err, record) => {
        if(err)
          console.log(err)

        this.setState({ subscribed: true })
      }
    )
  }

  renderSubscribeForm = () => {
    if (this.state.subscribed) {
      return (
        <div>
          <h6 className="Text--success">
            Thanks for subscribing! You should receive an invite within the next week.
          </h6>
        </div>
      )
    }

    return (
      <div>
        <p>
          <input ref={node => this.emailInput = node} type="text" placeholder="email address" />
        </p>

        <p>
          <button onClick={this.subscribe}>Subscribe</button>
        </p>
      </div>
    )
  }

  render = () => {
    return (
      <div className="Twain">
        <div className="Jumbotron">
          <h1 className="Header Header--title">Twain</h1>
          <h2 className="Header Header--secondary pull-up">Professional copy-editing as a service</h2>
        </div>

        <div className="Section Section--alt">
          <p className="Text--quote">
            "The difference between the right word and the almost right word
            is the difference between lightning and a lightning bug."
          </p>
          <p className="Text--quote">
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

        <div className="Section Section--alt">
          <div className="Section__header">
            <h1>Write better.</h1>
            <p>Get feedback from professional copy-editors to improve your writing quality and increase reader engagement.</p>
          </div>
          <div className="Page">
            <p>
              <span className="Text--strikethrough Text--highlight">
                Effective communication is one of today's most valuable skills. Whether you're
                writing a blog post, content marketing, or an email; the value of good
                articulation has never been higher.
              </span>
            </p>

            <p>
              <span className="Text--highlight--alt">
                Though most readers can distinguish between good and bad writing when they see it,
                they are uncertain about what goes into great writing.
              </span>

              Great writing has rhythm. If
              your sentences are long and drawn out, crawling towards the point they make, seemingly
              with no end -- that wouldn't be very engaging. Break them up. Use short sentences sometimes.
            </p>

            <p>
              The best writing isn't riddled with &nbsp;
              <span className="Text--highlight">labyrinthine words and resplendent terminology.</span> &nbsp;
              If your goal is to communicate an idea to your audience, keep your writing clear, simple, and authentic.
            </p>

            <p>
              As the great Mark Twain once said: "Writing is easy. All you have to do is cross out the wrong words."
            </p>

            <div className="Annotation Annotation--1">
              <p>Try removing this intro paragraph, still sounds great without it!</p>
            </div>

            <div className="Annotation Annotation--alt Annotation--2">
              <p>This is called “backing into a sentence” and makes the sentence difficult to read. Try rephrasing it to put the subject first.</p>
            </div>

            <div className="Annotation Annotation--3">
              <p>How about: “complicated words and terminology”?</p>
            </div>
          </div>
        </div>

        <div className="Section Section--cta">
          <h1>Try it for free</h1>
          <h6>Sign up on the waiting list and get one free review when we launch.</h6>

          { this.renderSubscribeForm() }
        </div>

        <div className="Section Section--footer">
          <p>Questions? help@twain.app</p>
        </div>
      </div>
    )
  }
}
