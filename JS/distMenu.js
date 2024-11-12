function fmenu(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.getElementById('cuerpoPag').innerHTML = data;
        }).catch(error => console.log('Error al cargar la página', error));
};

$(document).ready(function(){
    // Configurar Parsley validaciones de formulario
    $('#registroForm').parsley({
        trigger: 'input'
    });
    // Para asegurar la validación inmediata mientras el usuario escribe
    $('input').on('input', function () {
        $(this).parsley().validate();
    });

    // agrega un manejador de eventos a un formulario con el ID 
    // registroForm para escuchar el evento de envío (submit).
    // La finalidad es Usar los valores del formulario
    $('#registroForm').on('submit', function(event){
        // Con event. preventDeault Previene el comportamiento predeterminado del evento de envío del formulario. 
        // Es decir, evita que la página se recargue o que se envíe el formulario automáticamente.
        event.preventDefault();
        if ($(this).parsley().isValid()){ // si la validación del formulario es valida o correcta
            //OJO abre la consola en el inspecionador de la WEB para que veas lo que te muestra

            // Creo una constante para capturar el valor del nro documento del input de entrda de datos
            const nroDoc = document.getElementById('nroDoc').value;
            // Lo escribo por consola para ver si me trajo el valor
            console.log('Nro.Documento: ', nroDoc);
            // Así puedes capturar todos los valores que inresaron por el formulario
            const tipoDoc = document.getElementById('tipoDoc').value;
            console.log('Tipo Documento: ', tipoDoc);
            console.log ('Formulario valido. Los datos se enviaran a donde tu le digas ....');

            $('#exampleModal').modal('hide'); // Cierro el modal que esta abierto
            alert('Su perfil ha sido guardado con éxito');
            // Cuando el modal se oculta, limpia el formulario
            $('#exampleModal').on('hidden.bs.modal', function () {
                $('#registroForm')[0].reset(); // Restablece todos los campos del formulario a sus valores iniciales
                $('#registroForm').parsley().reset(); // Restablece cualquier mensaje de error de Parsley
            });
        }
    }); 
});





