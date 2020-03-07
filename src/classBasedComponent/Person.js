import React, { Component } from 'react'
import { PersonInfo } from '../stateLessComponent/PersonInfo'

export default class Person extends Component {
  state = {
    person: [
      { name: "Alex", age: 34 },
      { name: "bob", age: 23 },
      { name: "Curry", age: 24 }
    ],
    otherState: "Other State"
  }

  changeInfo = () => {
    this.setState({
      person: [
        { name: "ovi", age: 25 }
      ]
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeInfo}>change Info</button>
        <PersonInfo name={this.state.person[0].name} age={this.state.person[0].age} />
      </div>
    )
  }
}
