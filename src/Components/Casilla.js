import React from 'react'

export default class Casilla extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} className="casilla">
        {this.props.value}
      </div>
    )
  }
}
