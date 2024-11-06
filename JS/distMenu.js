function fmenu(page){
    fetch(`${page}.html`).then(response=>response.text()).then(data=>{
                    document.getElementById('cuerpoPag').innerHTML = data;
              }).catch(error=> console.log('Error al cargar la página', error));
 
}

