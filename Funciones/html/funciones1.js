function calcularSuperficieTriangulo() {
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let superficie = (base * altura) / 2;
    document.getElementById('resultadoTriangulo').innerText = "La superficie del triángulo es: " + superficie;
}

function solicitarDatosPersonales() {
    let nombre = document.getElementById('nombre').value;
    let edad = document.getElementById('edad').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;

    document.getElementById('datosPersonales').innerHTML = `
        <h2>Datos personales:</h2>
        <p>Nombre: ${nombre}</p>
        <p>Edad: ${edad}</p>
        <p>Dirección: ${direccion}</p>
        <p>Teléfono: ${telefono}</p>
        <p>Email: ${email}</p>
    `;
}

function calcularNomina() {
    let totalNomina = 0;

    for (let i = 1; i <= 5; i++) {
        let sueldo = parseFloat(document.getElementById(`trabajador${i}`).value);
        totalNomina += sueldo;
    }

    document.getElementById('totalNomina').innerText = "El total de la nómina a pagar es: " + totalNomina;
}

function calcularPromedio() {
    let materia1 = parseFloat(document.getElementById('materia1').value);
    let materia2 = parseFloat(document.getElementById('materia2').value);
    let materia3 = parseFloat(document.getElementById('materia3').value);

    let promedio = (materia1 + materia2 + materia3) / 3;
    document.getElementById('resultadoPromedio').innerText = "El promedio del alumno es: " + promedio.toFixed(2);
}
