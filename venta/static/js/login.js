const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Previene el comportamiento por defecto del formulario

  const email = event.target.emailLog.value;
  const password = event.target.passwordLog.value;

  if (email === '' || password === '') {
    errorMessage.textContent = 'Ingrese sus datos correctamente.'; // Cambia el mensaje de error
    return;
  }

  // Aquí iría la lógica para enviar los datos a la API de login
  // Y recibir la respuesta correspondiente

  errorMessage.textContent = ''; // Borra el mensaje de error
  alert('Login exitoso!');
  // Aquí iría el redireccionamiento a la página correspondiente
});