let operacion;
let checkNumero = false;
let ejecucion = true;

class Calculadora {
    constructor() {
        this.lastresult = 0;
    }
    suma(num1, num2) {
        return (num1 + num2);
    }
    resta(num1, num2) {
        return (num1 - num2);
    }
    multiplicacion(num1, num2) {
        return (num1 * num2);
    }

    division(num1, num2) {
        return (num1 / num2);
    }
};
class OperacionError extends Error {
    constructor(message) {
        super(message);
        this.name = "OperacionError";
    }
}
class OperadorError extends Error {
    constructor(message) {
        super(message);
        this.name = "OperadorError";
    }
}
let calculadora = new Calculadora();

function PedirOperador() {
    try {
        let checkOperador = false;
        while (checkOperador === false) {
            operacion = prompt("¿Que operación vas a realizar? (+, -, * ó /)");
            operacion = operacion.replace(/\s+/g, "");
            if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
                checkOperador = true;
            } else {
                throw new OperacionError("Operador desconocido.");
            }
        }
    }
    catch (error) {
        if (error.name === "OperacionError") {
            alert(error.message);
            PedirOperador();
        }
    }
}

let PedirOperandos = function () {
    try {
        let num1, num2;
        while (checkNumero === false) {
            let num1Asignado = false;
            numeros = prompt("Introduce los números de la operación");
            numeros = numeros.trim();
            let arrayNumeros = numeros.split(" ");
            for (let i = 0; i < arrayNumeros.length; i++) {
                let conversionInt = arrayNumeros[i];

                if ((Number.isInteger(Number(conversionInt)) === true) && num1Asignado === false) {
                    num1 = Number(conversionInt);
                    num1Asignado = true;
                    continue;
                }
                if (conversionInt === "R" && num1Asignado === false) {
                    num1 = calculadora.lastresult;
                    num1Asignado = true;
                    continue;
                }

                if ((Number.isInteger(Number(conversionInt)) === true) && num1Asignado === true) {
                    num2 = Number(conversionInt);
                }

                if (conversionInt === "R" && num1Asignado === true) {
                    num2 = calculadora.lastresult;
                }

            }
            if (Number.isInteger(num1) === true && Number.isInteger(num2) === true) {
                checkNumero = true;
            } else {
                throw new OperadorError("Numeros introducidos incorrectos.");
            }
        }
        console.log(num1 + "-" + num2);
        return (num1 + "-" + num2);

    } catch (error) {
        if (error.name === "OperadorError") {
            alert(error.message);
            return PedirOperandos();
        }

    }
};


while (ejecucion === true) {
    PedirOperador();
    checkNumero = false;

    let StringNumeros = PedirOperandos();
    console.log(StringNumeros);
    let ListaNumeros = StringNumeros.split("-");
    let num1 = Number(ListaNumeros[0]);
    let num2 = Number(ListaNumeros[1]);

    let res = "";
    switch (operacion) {
        case "+":
            res = calculadora.suma(num1, num2);
            alert("El resultado de la suma es " + res);
            break;
        case "-":
            res = calculadora.resta(num1, num2);
            alert("El resultado de la resta es: " + res);
            break;
        case "*":
            res = calculadora.multiplicacion(num1, num2);
            alert("El resultado de la multiplicación es: " + res);
            break;
        case "/":
            res = calculadora.division(num1, num2);
            alert("El resutado de la division es: " + res);
            break;
    }
    calculadora.lastresult = res;

    repOperacion = confirm("¿Quieres volver a hacer otra operación?");

    if (repOperacion === false) {
        ejecucion = false;
    }
}

