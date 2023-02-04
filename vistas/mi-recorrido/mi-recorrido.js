// "========================== LOADING DE PAGINA ======================================"
obtenerGitHub("ex0num");
var dataUserGithub;
// ----------------- LISTADO DE FUNCIONES -----------------

// ---- Consumo de API de Github. ---- //
async function obtenerGitHub(nombrePublicoGitHub)
{
    console.log("Consultando");

    const url_API = "https://api.github.com/users/" + nombrePublicoGitHub;
    
    // Consulto a la API y espero rta.
    fetch(url_API)
    .then((response) => 
    {
        // Traspaso a JSON y espero rta.
        response.json().then( (responseJSON)=>
        {
            // Rta lista
            dataUserGithub = responseJSON;
            console.log(dataUserGithub);

            if (dataUserGithub["html_url"] == undefined) 
            {
                var textoErrorAlBuscar = document.getElementById("datos-github-textoError");
                textoErrorAlBuscar.style.animation = "tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";

                textoErrorAlBuscar.removeAttribute("hidden");


                setTimeout(() => 
                {
                    textoErrorAlBuscar.style.animation = "tracking-out-contract 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"

                    setTimeout(() => 
                    {
                        textoErrorAlBuscar.setAttribute("hidden","true");        
                    }, 1500);
                
                }, 2500);
            }
            else 
            {
                setearDatosGithub();
            }

        })
    })
    .catch((error) => 
    {
        alert("No se pudo verificar el usuario");
    });
}

function setearDatosGithub()
{
    var githubUser_foto = document.getElementById("githubUser-foto");
    var githubUser_nombre = document.getElementById("githubUser-nombre");
    var githubUser_cuenta = document.getElementById("githubUser-cuenta");
    var githubUser_ubicacion = document.getElementById("githubUser-ubicacion");
    var githubUser_seguidores = document.getElementById("githubUser-seguidores");
    var githubUser_siguiendo = document.getElementById("githubUser-siguiendo");
    var githubUser_biografia = document.getElementById("githubUser-biografia");
    var githubUser_url = document.getElementById("githubUser-url");

    githubUser_foto.setAttribute("src", dataUserGithub["avatar_url"]);
    githubUser_nombre.innerHTML = dataUserGithub["name"];
    githubUser_cuenta.innerHTML = dataUserGithub["login"];
    githubUser_ubicacion.innerHTML = dataUserGithub["location"];
    githubUser_seguidores.innerHTML = dataUserGithub["followers"];
    githubUser_siguiendo.innerHTML = dataUserGithub["following"];
    githubUser_biografia.innerHTML = dataUserGithub["bio"];
    githubUser_url.innerHTML = dataUserGithub["html_url"];
    
}

var btnBuscarGithub = document.getElementById("btn-buscar-recorrido");
btnBuscarGithub.addEventListener("click", ()=>
{
    var inputNombreIngresado = document.getElementById("input-usuario").value;
    console.log("Buscando usuario: " + inputNombreIngresado);

    obtenerGitHub(inputNombreIngresado);
});