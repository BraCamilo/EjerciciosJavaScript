function calcularAreaOPerimetro(figura, dimension1, dimension2) {
    let area = 0;
    let perimetro = 0;
  
    
    switch (figura) {
      case 'triangulo':
        area = (dimension1 * dimension2) / 2;
        perimetro = dimension1 + dimension2 + dimension2;
        break;
      case 'rectangulo':
        area = dimension1 * dimension2;
        perimetro = 2 * (dimension1 + dimension2);
        break;
      case 'cuadrado':
        area = dimension1 * dimension1;
        perimetro = 4 * dimension1;
        break;
      case 'circulo':
  
        area = Math.PI * Math.pow(dimension1, 2);
        perimetro = 2 * Math.PI * dimension1;
        break;
      default:
        console.error("Figura no válida");
        return;
    }
  
  
    console.log(figura)
    console.log("Área:", area);
    console.log("Perímetro:", perimetro);
  }
  
  
  calcularAreaOPerimetro("triangulo", 5, 3);
  calcularAreaOPerimetro("rectangulo", 4, 6);
  calcularAreaOPerimetro("cuadrado", 3);
  calcularAreaOPerimetro("circulo", 2);
  