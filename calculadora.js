let calculadora = {
    suma: function(num1, num2) {
        return (num1 + num2);
    },
    resta: function(num1, num2) {
        return (num1 - num2);
    },
    multiplicacion: function(num1, num2) {
        return (num1 * num2);
    },

    division: function(num1, num2) {
        return (num1 / num2);
    },
    lastresult: 0,
};

let ejecucion = true;
while(ejecucion === true) {
    function PedirOperador() {
        let CheckOperador = false;
        while(CheckOperador === false) {
            operacion = prompt("¿Que operación vas a realizar? (+, -, * ó /)");
            operacion = operacion.replace(/\s+/g, "");
            if(operacion === "+" || operacion === "-" || operacion === "*" || operacion === "/") {
                CheckOperador = true;
            }else {
                alert("Operador desconocido.");
            }
        }
        return operacion;
    
    }
    operacion = PedirOperador();


    let CheckNumero = false;
    let PedirOperandos = function() {
        let num1, num2;
        while (CheckNumero === false) {
            let num1Asignado = false;
            numeros = prompt ("Introduce los números de la operación");
            numeros = numeros.trim();
            let ArrayNumeros = numeros.split(" ");
            for (let i = 0; i < ArrayNumeros.length; i++) {
                let conversionInt = ArrayNumeros[i];

                if((Number.isInteger(Number(conversionInt)) === true) && num1Asignado === false) {
                    num1 = Number(conversionInt);
                    num1Asignado = true;
                    continue;
                }
                if(conversionInt === "R" && num1Asignado === false) {
                    num1 = calculadora.lastresult;
                    num1Asignado = true;
                    continue;
                }

                if((Number.isInteger(Number(conversionInt)) === true) && num1Asignado === true) {
                    num2 = Number(conversionInt);
                }

                if(conversionInt === "R" && num1Asignado === true) {
                    num2 = calculadora.lastresult;
                }

            }
            if (Number.isInteger(num1) === true && Number.isInteger(num2) === true) {
                CheckNumero = true;
            }else {
                alert("Numeros introducidos incorrectos.");
            }
        }
        return (num1+"-"+num2);
    }
    
    StringNumeros = PedirOperandos();
    ListaNumeros = StringNumeros.split("-");
    let num1 = Number(ListaNumeros[0]);
    let num2 = Number(ListaNumeros[1]);

    let res = "";
    switch (operacion) {
        case "+":
            res = calculadora.suma(num1, num2);
            alert("El resultado de la suma es "+res);
            break;
        case "-":
            res = calculadora.resta(num1, num2);
            alert("El resultado de la resta es: "+res);
            break;
        case "*":
            res = calculadora.multiplicacion(num1, num2);
            alert("El resultado de la multiplicación es: "+res)
            break;
        case "/":
            res = calculadora.division(num1, num2);
            alert("El resutado de la division es: "+res);
            break;
    }
    calculadora.lastresult = res;

    RepOperacion = confirm("¿Quieres volver a hacer otra operación?");
    
    if(RepOperacion === false) {
        ejecucion = false;
    }
}