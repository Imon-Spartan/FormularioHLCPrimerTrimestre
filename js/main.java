// Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const numero = document.getElementById('numero');
const numeroError = document.querySelector('#numero + span.error');

email.addEventListener('input', function (event) {
  // Cada vez que el usuario escribe algo, verificamos si
  // los campos del formulario son válidos.

  if (email.validity.valid) {
    // En caso de que haya un mensaje de error visible, si el campo
    // es válido, eliminamos el mensaje de error.
    emailError.innerHTML = ''; // Restablece el contenido del mensaje
    emailError.className = 'error'; // Restablece el estado visual del mensaje
  } else {
    // Si todavía hay un error, muestra el error exacto
    showError();
  }
});

numero.addEventListener('input', function(event) {
  if(numero.validity.valid){
    numeroError.innerHTML = ''; // Restablece el contenido del mensaje
    numeroError.className = 'error'; // Restablece el estado visual del mensaje
  }else{
    showError();
  }
});

form.addEventListener('submit', function (event) {
  // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

  if(!email.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showError();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }

  if(!numero.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showError();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }

  //Mostramos la hora de envio del formulario
  let d = new Date();
  document.body.innerHTML = "Formulario enviado a las:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
  }
});

function showError() {
  if(email.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'Debe introducir una dirección de correo electrónico.';
  } else if(email.validity.typeMismatch) {
    // Si el campo no contiene una dirección de correo electrónico
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El valor introducido debe ser una dirección de correo electrónico.';
  } else if(email.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    emailError.textContent = 'El correo electrónico debe tener al menos ${ email.minLength } caracteres; ha introducido ${ email.value.length }.';
  }

  // Establece el estilo apropiado
  emailError.className = 'error activo';
}

//Para la validación de un número de telefono correcto:

function phonenumberCorrect(inputtxt) {
    var phoneno = /^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{3})$/; //Permite introducir un número de telefono dividido en 3 grupos de 3 cifras sólo separado por espacios
    if(inputtxt.value.match(phoneno)) {                             //Esta expresión se puede modificar para hacerlo más general y poder meter el número de telefono del pais que se quiera
      return true;                                                  //Yo he decidido hacerlo exclusivamente para un número de España
    }
    else {
      alert("Debe de introducir un número de telefono valido");
      return false;
    }
}