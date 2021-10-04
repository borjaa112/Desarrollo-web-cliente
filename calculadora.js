alert("Bienvenido a la calculadora de Borja");

let ejecucion = true;
while(ejecucion === true){
    let CheckOperador = false;
    let operacion;
    while (CheckOperador === false) {
        operacion = prompt("¿Que operación vas a realizar? (+, -, * ó /)");
        operacion = operacion.replace(/\s+/g, "");
        if(operacion === "+" | operacion === "-" | operacion === "*" | operacion === "/"){
            CheckOperador = true;
        }else{
            alert("Operador desconocido.");
        }
    }
    let num1, num2, operadores = "";
    let CheckNumero = false;
    while (CheckNumero === false) {
        num1 = "", num2 = "", operadores = "", num1Asignado = false;
        numeros = prompt("Introduce los números de la operación");
        numeros = numeros.trim();
        let ArrayNumeros = numeros.split(" ");

        for (let i = 0; i < ArrayNumeros.length; i++) {

            let conversionInt = Number(ArrayNumeros[i]);
            if(Number.isInteger(conversionInt) & num1Asignado === false){
                num1 = conversionInt;
                num1Asignado = true;
            }else{
                num2 = conversionInt;
            }
            
        }
        if(Number.isInteger(num1) === true & Number.isInteger(num2) === true){
            CheckNumero = true;
        }else{
            alert("Numeros introducidos incorrectos.");
        }
    }
    switch (operacion) {
        case "+":
            alert("el resultado de la suma es: "+(num1+num2));
            break;
    
        case "-":
            alert("el resultado de la resta es: "+(num1-num2));
            break;
    
        case "*":
            alert("el resultado de la multiplicación es: "+(num1*num2));
            break;
        
        case "/":
            alert("el resultado de la división es: "+(num1/num2));
            break;
    }
    
    RepOperacion = confirm("¿Quieres volver a hacer otra operación?");
    
    if(RepOperacion === false){
        ejecucion = false;
    }
}