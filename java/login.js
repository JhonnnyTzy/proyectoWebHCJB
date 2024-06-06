const form = document.getElementById('login-form');
const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica para validar las credenciales de inicio de sesión
    // y enviar los datos al servidor.

    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();

    if (usernameValue === 'admin' && passwordValue === 'password') {
        // Credenciales válidas
        alert('Login exitoso!');
        // Redirigir a la página principal u otra acción después del inicio de sesión
    } else {
        // Credenciales inválidas
        alert('Usuario o contraseña incorrectos');
    }
});