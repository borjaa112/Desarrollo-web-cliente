alert("Bienvenido a la calculadora de Borja");


function PedirOperador() {
    let CheckOperador = false;
    while(CheckOperador === false){
        operacion = prompt("¿Que operación vas a realizar? (+, -, * ó /)");
        operacion = operacion.replace(/\s+/g, "");
        if(operacion === "+" | operacion === "-" | operacion === "*" | operacion === "/"){
            CheckOperador = true;
        }else{
            alert("Operador desconocido.");
        }
    }
    return operacion;

}
operacion = PedirOperador();


let CheckNumero = false;
let PedirOperandos = function(){
    let num1, num2;
    while(CheckNumero === false){
        let num1Asignado = false;
        numeros = prompt("Introduce los números de la operación");
        numeros = numeros.trim();
        let ArrayNumeros = numeros.split(" ");
    
        for (let i = 0; i < ArrayNumeros.length; i++) {
    
            let conversionInt = Number(ArrayNumeros[i]);
            if(Number.isInteger(conversionInt) & num1Asignado === false){
                num1 = conversionInt;
                num1Asignado = true;
            }
            if(Number.isInteger(conversionInt) & num1Asignado === true){
                num2 = conversionInt;
            }
            
        }
        if(Number.isInteger(num1) === true & Number.isInteger(num2) === true){
            CheckNumero = true;
        }else{
            alert("Numeros introducidos incorrectos.");
        }
    }
    return(num1+"-"+num2);
}

StringNumeros = PedirOperandos();
ListaNumeros = StringNumeros.split("-");
let num1 = Number(ListaNumeros[0]);
let num2 = Number(ListaNumeros[1]);

let suma = (num1, num2) => alert("El resultado de la suma es: "+(num1+num2));
let resta = (num1, num2) => alert("El resultado de la resta es: "+(num1-num2));
let multiplicacion = (num1, num2) => alert("El resultado de la multiplicacion es: "+(num1*num2));
let division = (num1, num2) => alert("El resultado de la division es: "+(num1/num2));

switch (operacion) {
    case "+":
        suma(num1, num2);
        break;
    case "-":
        resta(num1, num2);
        break;
    case "*":
        multiplicacion(num1, num2);
        break;
    case "/":
        division(num1, num2);
        break;
}