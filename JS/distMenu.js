function fmenu(page){
    fetch(`${page}.html`).then(response=>response.text()).then(data=>{
                document.getElementById('cuerpoPag').innerHTML = data;

                 // Espera un momento para que el contenido se cargue en el DOM
                setTimeout(() => {
                        // Configurar Parsley para validar en cada interacción
                        $('#registroForm').parsley({
                            trigger: 'input'
                        });
                        // Para asegurar la validación inmediata mientras el usuario escribe
                        $('input').on('input', function() {
                            $(this).parsley().validate();
                        });
                        // Selecciona el modal por su ID
                        var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
                        modal.show(); // Muestra el modal automáticamente
                }, 100); 
                // Un pequeño retraso para asegurar que el contenido está completamente cargado


              }).catch(error=> console.log('Error al cargar la página', error));
 
};

    
