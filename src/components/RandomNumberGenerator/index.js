import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {num: 0}

  check = () => {
    this.setState({num : Math.ceil(Math.random() * 100)})
  }

  render() {
    const {num} = this.state
    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.check}>
            Generate
          </button>
          <p className="count">{num}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
