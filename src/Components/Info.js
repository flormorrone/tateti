import React from 'react'
//clase que renderiza la info del juego
export default class Info extends React.Component {
  render() {
    let status

    if (this.props.ganador) status = 'El ganador es: ' + this.props.ganador
    else if (this.props.historial.length > 9 && !this.props.ganador)
      status = 'Empate'
    else status = 'El próximo turno es de ' + (this.props.turnoX ? 'X' : 'O')

    return (
      <div className="info">
        <div className="status">{status}</div>
        <ul className="movimientos">{this.props.movimientos}</ul>
      </div>
    )
  }
}
