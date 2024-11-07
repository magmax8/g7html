function fmenu(page){
    fetch(`${page}.html`)
        .then(response=>response.text())
        .then(data=>{
                    document.getElementById('cuerpoPag').innerHTML = data;
              
                // Seleccionar el modal llamandolo por su Id
                var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
                modal.show(); // Muestra el modal
              
              
                }).catch(error=> console.log('Error al cargar la página', error));
 
}

