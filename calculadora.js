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
class ErrorOperacion extends Error {
    constructor(message) {
        super(message);
        this.name = "ErrorOperacion";
    }
}
class ErrorOperador extends Error {
    constructor(message) {
        super(message);
        this.name = "ErrorOperador";
    }
}
let calculadora = new Calculadora();
let operacion;

function PedirOperador() {
    try {
        let CheckOperador = false;
        while (CheckOperador === false) {
            operacion = prompt("¿Que operación vas a realizar? (+, -, * ó /)");
            operacion = operacion.replace(/\s+/g, "");
            if (operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
                CheckOperador = true;
            } else {
                throw new ErrorOperacion("Operador desconocido.");
            }
        }
    }
    catch (error) {
        if (error.name === "ErrorOperacion") {
            alert(error.message);
            PedirOperador();
        }
    }
}
let CheckNumero = false;
let PedirOperandos = function () {
    try {
        let num1, num2;
        while (CheckNumero === false) {
            let num1Asignado = false;
            numeros = prompt("Introduce los números de la operación");
            numeros = numeros.trim();
            let ArrayNumeros = numeros.split(" ");
            for (let i = 0; i < ArrayNumeros.length; i++) {
                let conversionInt = ArrayNumeros[i];

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
                CheckNumero = true;
            } else {
                throw new ErrorOperador("Numeros introducidos incorrectos.");
            }
        }
        console.log(num1 + "-" + num2);
        let r = num1 + "-" + num2;
        return r;

    } catch (error) {
        if (error.name === "ErrorOperador") {
            alert(error.message);
            return PedirOperandos();
        }

    }
};

let ejecucion = true;
while (ejecucion === true) {
    PedirOperador();
    CheckNumero = false;

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

    RepOperacion = confirm("¿Quieres volver a hacer otra operación?");

    if (RepOperacion === false) {
        ejecucion = false;
    }
}

