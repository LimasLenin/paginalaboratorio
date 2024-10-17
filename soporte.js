document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

    // Validación simple del correo electrónico
    if (validateEmail(email)) {
        message.textContent = `¡Te has suscrito con éxito! Enviamos un correo a ${email}.`;
        message.classList.remove('hidden');
        document.getElementById('email').value = ''; // Limpiar el campo de correo
    } else {
        message.textContent = 'Por favor, introduce un correo electrónico válido.';
        message.classList.remove('hidden');
    }
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el correo
    return re.test(String(email).toLowerCase());
}
