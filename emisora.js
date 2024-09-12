const personas = [];


function agregarPersona() {
    const nombre = prompt("Ingrese el nombre:");
    const identificacion = prompt("Ingrese el número de identificación (cédula):");
    const fechaNacimiento = prompt("Ingrese la fecha de nacimiento (dd/mm/aaaa):");
    const correo = prompt("Ingrese el correo electrónico:");
    const ciudadResidencia = prompt("Ingrese la ciudad de residencia:");
    const ciudadOrigen = prompt("Ingrese la ciudad de origen:");

    
    const canciones = [];
    for (let i = 1; i <= 3; i++) {
        const artista = prompt(`Ingrese el nombre del artista para la canción favorita ${i}:`);
        const titulo = prompt(`Ingrese el título de la canción favorita ${i}:`);
        canciones.push({ artista, titulo });
    }

    const persona = {
        nombre,
        identificacion,
        fechaNacimiento,
        correo,
        ciudadResidencia,
        ciudadOrigen,
        canciones,
    };

    personas.push(persona);
    alert("Persona agregada exitosamente.");
}

function mostrarPersonaPorPosicion() {
    const posicion = parseInt(prompt("Ingrese la posición de la persona que desea ver (0 para la primera persona):"));
    if (posicion >= 0 && posicion < personas.length) {
        const persona = personas[posicion];
        let mensaje = `Nombre: ${persona.nombre}\n` +
            `Identificación: ${persona.identificacion}\n` +
            `Fecha de Nacimiento: ${persona.fechaNacimiento}\n` +
            `Correo Electrónico: ${persona.correo}\n` +
            `Ciudad de Residencia: ${persona.ciudadResidencia}\n` +
            `Ciudad de Origen: ${persona.ciudadOrigen}\n` +
            `Canciones Favoritas:\n`;

        persona.canciones.forEach((cancion, index) => {
            mensaje += `  ${index + 1}. Artista: ${cancion.artista}, Título: ${cancion.titulo}\n`;
        });

        alert(mensaje);
    } else {
        alert("Posición inválida. Asegúrese de ingresar una posición existente.");
    }
}

function mostrarMenu() {
    let opcion = "";
    do {
        opcion = prompt(
            "Seleccione una opción:\n" +
            "a. Agregar una persona\n" +
            "b. Mostrar información de una persona por posición\n" +
            "c. Salir"
        );

        switch (opcion) {
            case "a":
                agregarPersona();
                break;
            case "b":
                mostrarPersonaPorPosicion();
                break;
            case "c":
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción inválida. Por favor, seleccione una opción válida.");
        }
    } while (opcion !== "c");
}

mostrarMenu();