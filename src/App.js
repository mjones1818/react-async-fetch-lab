import React from 'react'
const { Component } = require("react")

// create your App component here


class App extends Component {

  state = {

  }

  componentDidMount() {
    console.log("Mounted")
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => this.setState(
        {
          people: data.people
        }
      ))
  }

  render() {
    console.log(this.state)
    return (

      <div>

      </div>
    )
  }
}

export default App