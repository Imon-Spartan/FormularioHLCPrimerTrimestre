// Hay muchas formas de elegir un nodo DOM; aquí obtenemos el formulario y, a continuación, el campo de entrada
// del correo electrónico, así como el elemento span en el que colocaremos el mensaje de error.
const form  = document.getElementsByTagName('form')[0];

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');
const numero = document.getElementById('numero');
const numeroError = document.querySelector('#numero + span.error');
const dni = document.getElementById('dni');
const dniError = document.querySelector('#dni + span.error');

let pensamientos= ["La Razón lleva a la duda; La duda lleva a la herejía","La diferencia entre la herejía y la traición es la Ignorancia","Solo los locos prosperan", "El éxito se conmemora. El fallo tan solo se recuerda"];

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

dni.addEventListener('input', function(event) {
  if(dni.validity.valid){
    dniError.innerHTML = ''; // Restablece el contenido del mensaje
    dniError.className = 'error'; // Restablece el estado visual del mensaje
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

  if(!dni.validity.valid) {
    // Si no es así, mostramos un mensaje de error apropiado
    showError();
    // Luego evitamos que se envíe el formulario cancelando el evento
    event.preventDefault();
  }

  //Mostramos la hora de envio del formulario
  let d = new Date();
  document.body.innerHTML = "Formulario enviado a las:  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()
  
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

  if(numeroError.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    numeroError.textContent = 'Debe introducir un número de teléfono (XXX XXX XXX).';
  } else if(numeroError.validity.typeMismatch) {
    // Si el campo no contiene un numero de telefono
    // muestra el mensaje de error siguiente.
    numeroError.textContent = 'El valor introducido debe ser un número de teléfono.';
  } else if(numeroError.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    numeroError.textContent = 'El número de teléfono debe tener al menos ${ numero.minLength } caracteres; ha introducido ${ numero.value.length }.';
  }

  if(dniError.validity.valueMissing) {
    // Si el campo está vacío
    // muestra el mensaje de error siguiente.
    dniError.textContent = 'Debe introducir un DNI (999999999X).';
  } else if(dniError.validity.typeMismatch) {
    // Si el campo no contiene un numero de telefono
    // muestra el mensaje de error siguiente.
    dniError.textContent = 'El valor introducido debe ser un DNI.';
  } else if(dniError.validity.tooShort) {
    // Si los datos son demasiado cortos
    // muestra el mensaje de error siguiente.
    dniError.textContent = 'El DNI debe tener al menos ${ dni.minLength } caracteres; ha introducido ${ dni.value.length }.';
  }

  // Establece el estilo apropiado
  emailError.className = 'error email activo';
  numeroError.className = 'error numero activo';
}

//Para la validación de un número de telefono correcto:

function phonenumberCorrect(numero) {
    var phoneno = /^\(?([0-9]{3})\)?[ ]?([0-9]{3})[ ]?([0-9]{3})$/; //Permite introducir un número de telefono dividido en 3 grupos de 3 cifras sólo separado por espacios
    if(numero.value.match(phoneno)) {                             //Esta expresión se puede modificar para hacerlo más general y poder meter el número de telefono del pais que se quiera
      return true;                                                  //Yo he decidido hacerlo exclusivamente para un número de España
    }
    else {
      return false;
    }
}

//Para la validación de un DNI

function nif(dni) {
  var numero
  var letr
  var letra
  var expresion_regular_dni
 
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
 
  if(expresion_regular_dni.test (dni) == true){
     numero = dni.substr(0,dni.length-1);
     letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
       alert('Dni erroneo, la letra del NIF no se corresponde');
     }else{
       alert('Dni correcto');
     }
  }else{
     alert('Dni erroneo, formato no válido');
   }
}

const pensamiento = () =>{
  var pensamientos = ["Pensamiento 0", "Pensamiento 1", "Pensamiento 2", "Pensamiento 3", "Pensamiento 4"];
  document.getElementById('pensamiento').innerHTML = pensamientos[Math.floor(Math.random() * pensamientos.length)];
}
pensamiento();
