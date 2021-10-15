const perimetroDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * 4;
const areaDelCuadrado = (ladoDelCuadrado) => ladoDelCuadrado * ladoDelCuadrado;
var calcularAreaCuadrado = () => {
    const ladoDelCuadrado = document.querySelector("#lado-cuadrado").value;
    const resultado = areaDelCuadrado(ladoDelCuadrado)
    document.querySelector("#resultado").innerHTML = resultado
}




const areaDelTriangulo = (baseDelTriangulo,alturaDelTriangulo) => baseDelTriangulo * alturaDelTriangulo /2;
var calcularAreaTriangulo = () => {
    const baseDelTriangulo = document.querySelector("#base-triangulo").value;
    const alturaDelTriangulo = document.querySelector("#altura-triangulo").value;
    const resultado = areaDelTriangulo(baseDelTriangulo, alturaDelTriangulo)
    document.querySelector("#resultado-triangulo").innerHTML = resultado
}
var calcularPerimetroTriangulo = () => {
    const baseDelTriangulo = document.querySelector("#base-triangulo").value;
    const alturaDelTriangulo = document.querySelector("#altura-triangulo").value;
    const resultado = perimetroDelTriangulo(baseDelTriangulo, alturaDelTriangulo)
    document.querySelector("#resultado-triangulo").innerHTML = resultado
}

//calculo del romobo
const areaDelRombo = (baseDelRombo, alturaDelRombo) =>
  baseDelRombo * alturaDelRombo;
const perimetroDelRombo = (baseDelRombo, ladoDelRombo) =>
  ladoDelRombo * ladoDelRombo + baseDelRombo * baseDelRombo;

var calcularAreaRombo = () => {
  const altDR = document.querySelector("#altura-rombo").value;
  const baseDR = document.querySelector("#base-rombo").value;

  const resultado = areaDelRombo(altDR, baseDR);
  document.querySelector("#resultado").innerHTML = resultado;
};
var calcularPerimetroRombo = () => {
  const ladoDR = document.querySelector("#lado-rombo").value;
  const baseDR = document.querySelector("#base-rombo").value;
  const resultado = perimetroDelRombo(ladoDR, baseDR);
  document.querySelector("#resultado").innerHTML = resultado;
};
// const ladoDelCuadrado = 6;
// const PI = 3.1416;
// let variableQueCambia
// const area = lado * lado;
// const perimetro = lado * 4;

// console.log(`Area: ${area}`);
// console.group({ area: area, perimetro: perimetro })
