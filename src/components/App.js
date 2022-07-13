import React, { Component } from 'react'

const ArrowHeader = (props) => {
  return (
    <React.Fragment>
      <p>Hi my name is {props.name}</p>
      <div>JSON.stringify(props, null, 2)</div>
    </React.Fragment>
  )
}

class Testclass extends React.Component {
  render() {
    return (
      <p>testclass name is </p>
    )
  }

}

class App extends Component {
  render() {
    return (
      <div>ProfileGenerator
        <h1>Hello Scaler</h1>
        <ArrowHeader name="Rahul Konda"></ArrowHeader>
        <Testclass></Testclass>
      </div>
    )
  }
}
export default App;