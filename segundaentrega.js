alert("Esta es una simulación de despegue de una nave. Gracias por participar");

let nombre = prompt("¿Cuál es tu nombre?");
alert("Hola " + nombre);

let actividad = [];

function aviso(param1) {
    let nombre1 = param1;
    inicio = prompt("Por favor indícanos si empezamos la simulación, vemos el historial o finalizamos " + nombre1 + ". Si/No/Historial/Finalizar");
    return inicio.toLowerCase();
}

function despegue(param2) {
    let reiniciar = true;

    while (reiniciar) {
        let opcion = aviso(param2);

        switch (opcion) {
            case "si":
                for (let i = 10; i >= 1; i--) {
                    console.log(i);
                    if (i === 2) {
                        let abortar = prompt("¿Quieres abortar?");
                        if (abortar.toLowerCase() === "si") {
                            alert("Abortamos despegue");
                            console.log("Abortamos despegue");
                            actividad.push("Abortó");
                            break;
                        } else if (abortar.toLowerCase() === "no") {
                            continue;
                        } else {
                            alert("No se tuvo respuesta");
                            console.log("No se tuvo respuesta");
                            i = 10;
                        }
                    }
                    if (i === 1) {
                        alert("Despegue");
                        console.log("Despegue");
                        actividad.push("Despegó");
                    }
                }
                alert("Se va a volver a iniciar la simulación");
                console.log("Se va a volver a iniciar la simulación");
                break;

            case "no":
                alert("Gracias");
                console.log("Gracias");
                alert("Se va a volver a iniciar la simulación");
                console.log("Se va a volver a iniciar la simulación");
                actividad.push("No se inició");
                break;

            case "historial":
                verActividad();
                alert("Se va a volver a iniciar la simulación");
                console.log("Se va a volver a iniciar la simulación");
                break;

            case "finalizar":
                console.log("Se finalizó");
                reiniciar = false;
                break;

            default:
                alert("No se tuvo respuesta válida");
                console.log("No se tuvo respuesta válida");
                break;
        }
    }
}

function verActividad() {
    let mensaje = "Historial de actividades:\n";
    actividad.forEach((elemento) => {
        mensaje += "- " + elemento + "\n";
    });
    console.log(mensaje);
}

despegue(nombre);



