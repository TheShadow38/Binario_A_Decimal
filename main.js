const entrada = document.getElementById('entrada');
const boton = document.getElementById('btn');
const salida = document.getElementById('salida');

let numeroDecimal, divisor, resultadoBinario, cociente, residuo;

boton.addEventListener('click', () => {
    validarEntrada();
    resultadoBinario = convertirDecimalABinario();
    salida.value = invertirCadena(resultadoBinario);
});

const validarEntrada = () => {
    (entrada.value === "") ? alert('Ingrese Datos') : console.log('Todo bien');
 };

 const convertirDecimalABinario = () => {
    numeroDecimal = entrada.value;
    divisor = 2;
    let numeroSalida = "";
    while (numeroDecimal >= 2){
        cociente = Math.trunc(numeroDecimal / divisor);
        residuo = numeroDecimal % divisor;
        numeroSalida += residuo.toString();
        numeroDecimal = cociente;
    }
    let auxiliar = numeroDecimal.toString();
    numeroSalida += auxiliar;
    return numeroSalida;
 };

 const invertirCadena = (cadenaTexto) => {
    return cadenaTexto.split("").reverse().join("");
 };

 