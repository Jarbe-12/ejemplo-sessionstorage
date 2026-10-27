function guardar(){
    const nombre = document.getElementById("nombre").value.trim();
    if(nombre){
        sessionStorage.setItem("nombre", nombre);
    }else{
        sessionStorage.removeItem("nombre");
    }
    window.location.href = "pagina2.html";
}

document.getElementById("btn-guardar").addEventListener("click", guardar);