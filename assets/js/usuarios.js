//VARIABLES

const fondoLogin = document.querySelector(".fondoLogin");
const fondoRegistro = document.querySelector(".fondoRegistro");
const frenteUsuarios = document.querySelector(".frenteUsuarios");
const formularioLogin = document.querySelector(".formularioLogin");
const formularioRegistro = document.querySelector(".formularioRegistro");

//SELECTORES

document.getElementById("btnIniciar").addEventListener("click", iniciarSesion);
document.getElementById("btnRegistro").addEventListener("click", registro);
document.getElementById("btnSesion").addEventListener("click", sesionUsuario);
document.getElementById("btnEnviar").addEventListener("click", enviarRegistro);

//FUNCIONES

//Le doy efecto para que cuando seleccione iniciar sesión se oculte el registro
function iniciarSesion(){
    formularioRegistro.style.display = "none";
    frenteUsuarios.style.left = "10px";
    formularioLogin.style.display = "block";
    fondoRegistro.style.opacity = "1";
    fondoLogin.style.opacity = "0";
}

//Le doy efecto para que cuando seleccione registrarse se oculte iniciar sesión
function registro(){
    formularioRegistro.style.display = "block";
    frenteUsuarios.style.left = "410px";
    formularioLogin.style.display = "none";
    fondoRegistro.style.opacity = "0";
    fondoLogin.style.opacity = "1";
}

//Envío el nombre de usuario a sessionStorage
function sesionUsuario() {
    let usuario = document.getElementById("usuario");
    sessionStorage.setItem("Inicio Sesión:", usuario.value);
}

//Envío los datos de registro al localStorage
function enviarRegistro() {
    let nombreUsuario = document.getElementById("nombreUsuario");
    let email = document.getElementById("email");
    let contrasenia = document.getElementById("contrasenia");

    localStorage.setItem("Nombre:", nombreUsuario.value);
    localStorage.setItem("Correo Electrónico:", email.value);
    localStorage.setItem("Contraseña:", contrasenia.value);
}