import React, { Component } from 'react'
import { Jumbotron} from 'react-bootstrap'


export default class MainJumbotron extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
            <h1 className="display-3">G'day!</h1>
            <p className="lead">Developed by Le(Josh). Lu, built on React.JS + Bootstrap 4</p>
            <hr className="my-2" />
            <p></p>
        </Jumbotron>
      </div>
    )
  }
}
