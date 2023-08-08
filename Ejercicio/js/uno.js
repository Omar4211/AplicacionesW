function calcularPrecio() {
    const bebidas = document.getElementsByTagName('select');
    const cantidadInput = document.getElementsByTagName('input')[0];
    const resultadoP = document.getElementsByTagName('p')[2];

    const opcion = parseInt(bebidas[0].value);
    const cantidad = parseFloat(cantidadInput.value);
    
    var precio = 0;
    var bebida = '';
    
    switch (opcion) {
        case 1:
            precio = cantidad * 45;
            bebida = 'Café';
            break;
        case 2:
            precio = cantidad * 35;
            bebida = 'Té';
            break;
        case 3:
            precio = cantidad * 20;
            bebida = 'Leche';
            break;
        case 4:
            precio = cantidad * 60;
            bebida = 'Malteada';
            break;
        case 5:
            precio = cantidad * 25;
            bebida = 'Jugo';
            break;
    }
    
    document.getElementById("resultado").textContent = "Ha elegido: " + bebida + cantidad + " Precio total: " +precio;
}


function cargarImagen(event) {
    const tablaCuerpo = document.getElementById('tablaCuerpo');
    const fila = document.createElement('tr');
    
    const imagen = document.createElement('img');

    
    document.getElementById('temasSeleccionados').textContent = temasSeleccionados
}
