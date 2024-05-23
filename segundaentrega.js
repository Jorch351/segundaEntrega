// Función para agregar un nuevo producto
function agregarProducto(productos) {
    let nombre = prompt("Ingrese el nombre del producto:");
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad del producto:"));
    let fecha = prompt("Ingrese la fecha de compra del producto (formato: AAAA-MM-DD):");

    // Validación básica
    if (!nombre || isNaN(precio) || isNaN(cantidad) || !fecha) {
        alert("Valor no válido. Por favor, intente de nuevo.");
        return;
    }

    // Crear objeto de producto
    let producto = {
        nombre: nombre,
        precio: precio,
        cantidad: cantidad,
        fecha: fecha
    };

    // Agregar el producto al arreglo de productos
    productos.push(producto);

    alert("Producto agregado con éxito.");
    console.log(producto);
}

// Función para mostrar todos los productos
function mostrarProductos(productos) {
    if (productos.length === 0) {
        alert("No hay productos registrados.");
        return;
    }

    let mensaje = "Productos registrados:\n";
    productos.forEach((producto, index) => {
        mensaje += `Producto ${index + 1}:\n`;
        mensaje += `Nombre: ${producto.nombre}\n`;
        mensaje += `Precio: $${producto.precio.toFixed(2)}\n`;
        mensaje += `Cantidad: ${producto.cantidad}\n`;
        mensaje += `Fecha de compra: ${producto.fecha}\n\n`;
    });

    alert(mensaje);
}

// Función para sumar los valores de productos comprados en la misma fecha
function sumarValoresPorFecha(productos) {
    if (productos.length === 0) {
        alert("No hay productos registrados.");
        return;
    }

    let fecha = prompt("Ingrese la fecha para sumar los valores de los productos (formato: AAAA-MM-DD):");
    let suma = 0;

    productos.forEach(producto => {
        if (producto.fecha === fecha) {
            suma += producto.precio * producto.cantidad;
        }
    });

    if (suma === 0) {
        alert(`No se encontraron productos comprados en la fecha: ${fecha}`);
    } else {
        alert(`El valor total de los productos comprados el ${fecha} es: $${suma.toFixed(2)}`);
    }
}

// Función principal para manejar el flujo del programa
function calculadoraDeProductos() {
    let productos = [];
    let opcion;

    alert("Este es un simulador de un contador de productos comprados en una ecommerce");
    do {
        opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Mostrar productos\n3. Salir");

        switch (opcion) {
            case '1':
                agregarProducto(productos);
                break;
            case '2':
                mostrarProductos(productos);
                break;
            case '3':
                sumarValoresPorFecha(productos);
                break;
            case '4':
                alert("Saliendo de la calculadora de productos.");
                break;
            default:
                alert("Opción no válida. Por favor, intente de nuevo.");
        }
    } while (opcion !== '3');
}

// Iniciar la calculadora de productos
calculadoraDeProductos();


despegue(nombre);



