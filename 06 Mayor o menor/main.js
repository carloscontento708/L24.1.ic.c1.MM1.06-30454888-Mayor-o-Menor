
function identificarMayorNumero() {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const num3 = parseInt(document.getElementById("numero3").value);

    let mayorNumero = num1;

    if (num2 > mayorNumero) {
        mayorNumero = num2;
    }
    if (num3 > mayorNumero) {
        mayorNumero = num3;
    }

    const numerosProcesados = `${num1}, ${num2}, ${num3}`;
    const resultado = `Los números procesados son: ${numerosProcesados}<br>El número mayor es: ${mayorNumero}`;
    document.getElementById("resultado").innerHTML = resultado;
}
