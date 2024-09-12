function mezclarVectoresOrdenados(vector1, vector2) {
    if (vector1.length > 5 || vector2.length > 5) {
      return "Los vectores no pueden tener más de 5 elementos.";
    }
    for (let i = 1; i < vector1.length; i++) {
      if (vector1[i] < vector1[i - 1]) {
        return "El primer vector no está ordenado de forma ascendente.";
      }
    }
    for (let i = 1; i < vector2.length; i++) {
      if (vector2[i] < vector2[i - 1]) {
        return "El segundo vector no está ordenado de forma ascendente.";
      }
    }
    let i = 0, j = 0, k = 0;
    const resultado = [];
    while (i < vector1.length && j < vector2.length) {
      if (vector1[i] <= vector2[j]) {
        resultado[k++] = vector1[i++];
      } else {
        resultado[k++] = vector2[j++];
      }
    }
    while (i < vector1.length) {
      resultado[k++] = vector1[i++];
    }
    while (j < vector2.length) {
      resultado[k++] = vector2[j++];
    }
    return resultado;
  }
  
  const vector1 = [1, 3, 6, 9, 17];
  const vector2 = [2, 4, 10, 17];
  
  const resultado = mezclarVectoresOrdenados(vector1, vector2);
  console.log(resultado);