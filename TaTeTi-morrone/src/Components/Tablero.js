import React from 'react'
import Casilla from './Casilla'

export default class Tablero extends React.Component {
  renderCasilla(i) {
    return (
      //el onClick que se pasa por parametro a la casilla corresponde al handleClick del Tablero
      <Casilla
        value={this.props.casillas[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }
  render() {
    return (
      <div className="tablero">
        {this.renderCasilla(0)}
        {this.renderCasilla(1)}
        {this.renderCasilla(2)}
        {this.renderCasilla(3)}
        {this.renderCasilla(4)}
        {this.renderCasilla(5)}
        {this.renderCasilla(6)}
        {this.renderCasilla(7)}
        {this.renderCasilla(8)}
      </div>
    )
  }
}
