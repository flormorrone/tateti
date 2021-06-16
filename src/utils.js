export function CalcularGanador(casillas) {
    //para calcular el ganador en cada jugada se setea un array con cada
    //una de las posibilidades (lineas horizontales, verticales y diagonales)
    const lineas = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    //En el FOR se chequea cada una de las lineas verificando, en primer lugar,
    //que la primer casilla tenga un valor y luego que cada casilla tenga ese mismo valor
    // si son todas iguales, retorna el valor correspondiente (X u O)
    for (let i = 0; i < lineas.length; i++) {
        const [a, b, c] = lineas[i]
        if (
            casillas[a] &&
            casillas[a] === casillas[b] &&
            casillas[b] === casillas[c]
        ) {
            return casillas[a]
        }
    }
    return null
}