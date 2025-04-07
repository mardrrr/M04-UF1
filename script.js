document.getElementById('consultaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Validación de campos no vacíos
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let tipoConsulta = document.getElementById('tipoConsulta').value;
    let mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !tipoConsulta || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    // Mensaje de confirmación
    alert('Consulta enviada correctamente. ¡Gracias!');

    // Cambiar estilo de un elemento (ejemplo)
    document.querySelector('.container').style.backgroundColor = '#e0f7fa';
});