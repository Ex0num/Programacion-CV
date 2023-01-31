// "========================== LOADING DE PAGINA ======================================"
obtenerGitHub("ex0num");

// ----------------- LISTADO DE FUNCIONES -----------------

// ---- Consumo de API de Github. ---- //
async function obtenerGitHub(nombrePublicoGitHub)
{
    console.log("Consultando");

    const url_API = "https://api.github.com/users/" + nombrePublicoGitHub;
    
    var respuesta;
    //respuesta = await fetch(url_API);
    respuesta = fetch(`https://source.unsplash.com/1600x900/?beach`);

    console.log(respuesta);
}

// PROXIMAMENTE...