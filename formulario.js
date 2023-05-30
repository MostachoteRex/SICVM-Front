function enviarFormulario() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var documentoIdentidad = document.getElementById("documento-identidad").value;
    var numeroIdentidad = document.getElementById("numero-identidad").value;
    var ciudad = document.getElementById("ciudad").value;
    var barrio = document.getElementById("barrio").value;
    var direccion = document.getElementById("direccion").value;
    var numeroEmergencia = document.getElementById("numero-emergencia").value;
  
    if (nombres === '' || apellidos === '' || documentoIdentidad === '' || numeroIdentidad === '' || ciudad === '' || barrio === '' || direccion === '' || numeroEmergencia === '') {
        alert("Por favor, complete todos los campos del formulario.");
        return; 
    }
      //Poner enlace
    fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombres: nombres,
          apellidos: apellidos,
          documentoIdentidad: documentoIdentidad,
          numeroIdentidad: numeroIdentidad,
          ciudad: ciudad,
          barrio: barrio,
          direccion: direccion,
          numeroEmergencia: numeroEmergencia
        })
    })
    .then(function(response) {
        if (response.ok) {
          alert("Formulario enviado correctamente");
        } else {
          alert("Error al enviar el formulario. Por favor, intente nuevamente.");
        }
    })
    .catch(function(error) {
        console.log(error);
        alert("Error al enviar el formulario. Por favor, intente nuevamente.");
    });
    
}
  
function enviarDenuncia() {
    var nombreDenuncia = document.getElementById("nombre-denuncia").value;
    var direccionDenuncia = document.getElementById("direccion-denuncia").value;
    var sexoDenuncia = document.getElementById("sexo-denuncia").value;

    if (nombreDenuncia === '' || direccionDenuncia === '' || sexoDenuncia === '') {
        alert("Por favor, complete todos los campos de la denuncia.");
        return;
    }
    //Poner enlace
    fetch('', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombreDenuncia: nombreDenuncia,
            direccionDenuncia: direccionDenuncia,
            sexoDenuncia: sexoDenuncia
        })
    })
    .then(function(response) {
        if (response.ok) {
    alert("Denuncia enviada correctamente");
    } else {
        alert("Error al enviar la denuncia. Por favor, intente nuevamente.");
    }
    })
    .catch(function(error) {
        console.log(error);
        alert("Error al enviar la denuncia. Por favor, intente nuevamente.");
    });

}

function agendarCita() {
    var nombresCita = document.getElementById("nombres-cita").value;
    var documentoIdentidadCita = document.getElementById("documento-identidad-cita").value;
    var numeroIdentidadCita = document.getElementById("numero-identidad-cita").value;

    if (nombresCita === '' || documentoIdentidadCita === '' || numeroIdentidadCita === '') {
        alert("Por favor, complete todos los campos de la cita.");
        return;
    }
    //Poner enlace
    fetch('', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        nombresCita: nombresCita,
        documentoIdentidadCita: documentoIdentidadCita,
        numeroIdentidadCita: numeroIdentidadCita
        })
    })
    .then(function(response) {
        if (response.ok) {
        alert("Cita agendada correctamente");
        } else {
        alert("Error al agendar la cita. Por favor, intente nuevamente.");
        }
    })
    .catch(function(error) {
        console.log(error);
        alert("Error al agendar la cita. Por favor, intente nuevamente.");
    });
}

function enviarMensaje() {
var numero = document.getElementById("numero-mensaje").value;
var mensaje = "Este es un mensaje de prueba.";

$.ajax({
    url: 'https://api.twilio.com/2010-04-01/Accounts/{YourAccountSID}/Messages.json',
    type: 'POST',
    headers: {
    'Authorization': 'Basic ' + btoa('{YourAccountSID}:{YourAuthToken}')
    },
    data: {
    From: 'whatsapp:{YourTwilioWhatsAppNumber}',
    To: 'whatsapp:' + numero,
    Body: mensaje
    },
    success: function(response) {
    alert("Mensaje enviado al número: " + numero);
    },
    error: function(error) {
    console.log(error);
    alert("Error al enviar el mensaje.");
    }
});

alert("Mensaje enviado al número: " + numero);
}

