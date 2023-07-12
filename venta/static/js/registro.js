const formulario = document.getElementById("formulario");
const nombreReg = document.getElementsByName("nombreReg")[0];
const rutReg = document.getElementsByName("rutReg")[0];
const emailReg = document.getElementsByName("emailReg")[0];
const passwordReg = document.getElementsByName("passwordReg")[0];
const passwordConReg = document.getElementsByName("passwordConReg")[0];

const validarNombre = () => {
  const nombre = nombreReg.value.trim();
  if (nombre.length < 3 || nombre.length > 30) {
    return false;
  }
  return true;
};

const validarRut = () => {
  const rut = rutReg.value.trim();
  if (rut.length !== 9) {
    return false;
  }
  return true;
};

const validarEmail = () => {
  const email = emailReg.value.trim();
  if (!email.includes("@") || !email.includes(".")) {
    return false;
  }
  return true;
};

const validarPassword = () => {
  const password = passwordReg.value.trim();
  if (password.length < 6) {
    return false;
  }
  return true;
};

const validarPasswordCon = () => {
  const passwordCon = passwordConReg.value.trim();
  if (passwordCon !== passwordReg.value.trim()) {
    return false;
  }
  return true;
};

const validarFormulario = (event) => {
  event.preventDefault();
  if (!validarNombre()) {
    nombreReg.parentNode.classList.add("invalid");
  } else {
    nombreReg.parentNode.classList.remove("invalid");
  }
  if (!validarRut()) {
    rutReg.parentNode.classList.add("invalid");
  } else {
    rutReg.parentNode.classList.remove("invalid");
  }
  if (!validarEmail()) {
    emailReg.parentNode.classList.add("invalid");
  } else {
    emailReg.parentNode.classList.remove("invalid");
  }
  if (!validarPassword()) {
    passwordReg.parentNode.classList.add("invalid");
  } else {
    passwordReg.parentNode.classList.remove("invalid");
  }
  if (!validarPasswordCon()) {
    passwordConReg.parentNode.classList.add("invalid");
  } else {
    passwordConReg.parentNode.classList.remove("invalid");
  }
  if (
    validarNombre() &&
    validarRut() &&
    validarEmail() &&
    validarPassword() &&
    validarPasswordCon()
  ) {
    formulario.submit();
  }
};

formulario.addEventListener("submit", validarFormulario);
