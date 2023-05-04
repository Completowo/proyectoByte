

const nombre = document.getElementById("nombreReg");
const email = document.getElementById("emailReg");
const password = document.getElementById("passwordReg");
const rut = document.getElementById("rutReg");
const confirmPassword = document.getElementById("passwordReg1");
const enviarRegistro = document.getElementById("enviarReg");

enviarRegistro.addEventListener("click", () => {
    if (nombre.value === "" || email.value === "" || password.value === "" || rut.value === "" || confirmPassword.value === "") {
        alert("Todos los campos son obligatorios");
        return;
    } 
    if (password.value!== confirmPassword.value) {
        alert("Las contraseñas no coinciden");
        return;
    }
    if (password.value.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres");
        return;
    }
    if (rut.value.length!== 9) {
        alert("El RUT debe tener 9 caracteres");
        return;
    }
    if (email.value.indexOf("@") === -1) {
        alert("El correo electrónico debe tener al menos un @");
        return;
    }
    if (email.value.indexOf(".") === -1) {
        alert("El correo electrónico debe tener al menos un. ");
        return;
    }
    if (email.value.indexOf(".")!== email.value.lastIndexOf(".")) {
        alert("El correo electrónico debe tener un. ");
        return;
    }
    if (email.value.indexOf("@")!== email.value.lastIndexOf("@")) {
        alert("El correo electrónico debe tener un @");
        return;
    }

    alert("Registro exitoso");
    window.location.href = "index.html";

});

