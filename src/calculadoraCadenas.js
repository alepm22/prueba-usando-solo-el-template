function extraerSeparadoresPersonalizados(cadena) {
  const PATRON_SEPARADORES = /\[(.*?)\]/g;
  let separadores = [];
  let coincidencia;
  while ((coincidencia = PATRON_SEPARADORES.exec(cadena)) !== null) {
    separadores.push(coincidencia[1]);
  }
  return separadores;
}

function esNumeroValido(numero) {
  return numero <= 1000;
}

function esUnSeparador(caracterActual, siguienteCaracter, cadena, indice, separadores) {
  const longitudCadena = cadena.length;
  return (
    (!isNaN(caracterActual) &&
      (siguienteCaracter === "," ||
       siguienteCaracter === "-" ||
       separadores.some(separador => 
         cadena.substring(indice + 1, indice + 1 + separador.length) === separador)
      ) &&
      indice !== longitudCadena - 1) ||
    indice === longitudCadena - 1
  );
}

function obtenerNumerosDesdeCadena(cadena, separadores) {
  let numeros = [];
  let numerosTemporales = [];
  const longitudCadena = cadena.length;

  for (let i = 0; i < longitudCadena; i++) {
    const caracterActual = cadena[i];
    const siguienteCaracter = cadena[i + 1];

    if (!isNaN(caracterActual)) {
      numerosTemporales.push(caracterActual);
    }

    if (esUnSeparador(caracterActual, siguienteCaracter, cadena, i, separadores)) {
      const numero = parseInt(numerosTemporales.join(''));
      if (esNumeroValido(numero)) {
        numeros.push(numero);
      }
      numerosTemporales = [];
    }
  }

  return numeros;
}

function sumarNumerosEnCadena(cadena) {
  const longitudCadena = cadena.length;
  if (longitudCadena === 0) return 0;

  const separadores = extraerSeparadoresPersonalizados(cadena);
  const numeros = obtenerNumerosDesdeCadena(cadena, separadores);

  return numeros.reduce((suma, numero) => suma + numero, 0);
}

export default sumarNumerosEnCadena;