import React from 'react'
import Tablero from './Tablero'
import { CalcularGanador } from '../utils'
import Info from './Info'
import '../App.css'

export default class Juego extends React.Component {
  //en el constructor se setean los parametros iniciales
  constructor(props) {
    super(props)
    this.state = {
      turnoX: true,
      paso: 0,
      historial: [{ casillas: Array(9).fill(null) }],
    }
  }

  handleClick(i) {
    //se realiza una copia de los valores
    const historial = this.state.historial.slice(0, this.state.paso + 1)
    const actual = historial[historial.length - 1]
    const casillas = actual.casillas.slice()

    //se chequea si hay un ganado o si la casilla está ocupada
    if (CalcularGanador(casillas) || casillas[i]) return

    //se chequea a quien le corresponde el turno
    casillas[i] = this.state.turnoX ? 'X' : 'O'

    //se actualizan valores con el setState
    this.setState({
      historial: historial.concat({ casillas: casillas }),
      turnoX: !this.state.turnoX,
      paso: historial.length,
    })
  }

  //Funcion para volver a paso anterior seteando el movimiento pasado por parametro al paso
  //y se indica el turno correspondiente a ese paso chequeando si el mov es par, entonces es 0(true)
  irAPaso(mov) {
    this.setState({
      paso: mov,
      turnoX: mov % 2 === 0,
    })
  }

  render() {
    const historial = this.state.historial
    const actual = historial[this.state.paso]
    const ganador = CalcularGanador(actual.casillas)
    //se mapea a historial para renderizar los pasos y poder elegir volver atras
    const movimientos = historial.map((paso, mov) => {
      const info = mov ? 'Ir a paso ' + mov : 'Resetear el juego'
      return (
        <li key={mov}>
          <button
            className="btn"
            style={{
              backgroundColor: info === 'Resetear el juego' && '#f55959',
            }}
            onClick={() => {
              this.irAPaso(mov)
            }}
          >
            {info}
          </button>
        </li>
      )
    })

    return (
      <div className="container">
        <Tablero
          onClick={(i) => this.handleClick(i)}
          casillas={actual.casillas}
        />
        <Info
          ganador={ganador}
          movimientos={movimientos}
          turnoX={this.state.turnoX}
          historial={this.state.historial}
        />
      </div>
    )
  }
}
