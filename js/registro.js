const formulario = document.getElementById('formulario');
const nombreReg = document.getElementsByName('nombreReg')[0];
const rutReg = document.getElementsByName('rutReg')[0];
const emailReg = document.getElementsByName('emailReg')[0];
const passwordReg = document.getElementsByName('passwordReg')[0];
const passwordConReg = document.getElementsByName('passwordConReg')[0];

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  if (validarNombre(nombreReg) && validarRut(rutReg) && validarEmail(emailReg) && validarPassword(passwordReg) && validarPasswordCon(passwordReg, passwordConReg)) {
    alert('Formulario enviado correctamente');
    formulario.reset();
  }
});

function validarNombre(nombre) {
  if (nombre.value.trim() === '') {
    setErrorFor(nombre, 'El nombre no puede estar vacío');
    return false;
  } else {
    setSuccessFor(nombre);
    return true;
  }
}

function validarRut(rut) {
  if (rut.value.trim() === '') {
    setErrorFor(rut, 'El RUT no puede estar vacío');
    return false;
  } else if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rut.value.trim())) {
    setErrorFor(rut, 'El formato del RUT es inválido');
    return false;
  } else {
    setSuccessFor(rut);
    return true;
  }
}

function validarEmail(email) {
  if (email.value.trim() === '') {
    setErrorFor(email, 'El email no puede estar vacío');
    return false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    setErrorFor(email, 'El formato del email es inválido');
    return false;
  } else {
    setSuccessFor(email);
    return true;
  }
}

function validarPassword(password) {
  if (password.value.trim() === '') {
    setErrorFor(password, 'La contraseña no puede estar vacía');
    return false;
  } else {
    setSuccessFor(password);
    return true;
  }
}

function validarPasswordCon(password, passwordCon) {
  if (passwordCon.value.trim() === '') {
    setErrorFor(passwordCon, 'La confirmación de contraseña no puede estar vacía');
    return false;
  } else if (passwordCon.value.trim() !== password.value.trim()) {
    setErrorFor(passwordCon, 'Las contraseñas no coinciden');
    return false;
  } else {
    setSuccessFor(passwordCon);
    return true;
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector('i.fa-exclamation-circule');
  formControl.className = 'input-field error';
  errorMessage.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const successIcon = formControl.querySelector('i.fas-check-circule');
  formControl.className = 'input-field success';
  successIcon.style.display = 'block';
}
