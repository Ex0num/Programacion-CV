// "========================== LOADING DE PAGINA ======================================"
inicializacionDePagina();
seleccionarEnBuscadorDinamico(false);

// "========================== 1RA SECCION DE PAGINA ======================================"
var btnVerMas = document.getElementById("btn-verMas");
btnVerMas.addEventListener("click", ( ()=> 
{
    var contenidoTotal_1erSeccion = document.getElementById("contenido-1erSeccion");
    contenidoTotal_1erSeccion.style.animation = "slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    var contenidoTotal_2daSeccion = document.getElementById("contenido-2daSeccion");

    setTimeout(() => 
    {
        contenidoTotal_1erSeccion.setAttribute("hidden","true");
        contenidoTotal_2daSeccion.removeAttribute("hidden");
        contenidoTotal_2daSeccion.style.animation = "slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
        
        var texto1_2daSeccion = document.getElementById("informacion-academica");
        var texto2_2daSeccion = document.getElementById("informacion-laboral");

        // texto1_2daSeccion.style.animation = "tracking-in-expand 3.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";
        // texto2_2daSeccion.style.animation = "tracking-in-expand 3.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";
        
    }, 1500);
}));

// "========================== 2DA SECCION DE PAGINA ======================================"
var btnVolver = document.getElementById("btn-volver");
btnVolver.addEventListener("click", ( ()=> 
{
    var contenidoTotal_2daSeccion = document.getElementById("contenido-2daSeccion");
    contenidoTotal_2daSeccion.style.animation = "slide-out-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    var contenidoTotal_1erSeccion = document.getElementById("contenido-1erSeccion");

    setTimeout(() => 
    {
        contenidoTotal_2daSeccion.setAttribute("hidden","true");
        contenidoTotal_1erSeccion.removeAttribute("hidden");
        contenidoTotal_1erSeccion.style.animation = "slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }, 1500);
}));

var btnAtributos = document.getElementById("btn-atributos");
btnAtributos.addEventListener("click", ()=> 
{
    // Fue clickeado el btn "atributos"
    seleccionarEnBuscadorDinamico(true);
});

var btnObjetivos = document.getElementById("btn-objetivos");
btnObjetivos.addEventListener("click", ()=> 
{
    // Fue clickeado el btn "objetivos"
    seleccionarEnBuscadorDinamico(false);
});

var btnVerMas = document.getElementById("btn-verMas2");
btnVerMas.addEventListener("click", ( ()=> 
{
    var contenidoTotal_2daSeccion = document.getElementById("contenido-2daSeccion");
    contenidoTotal_2daSeccion.style.animation = "slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    var contenidoTotal_3erSeccion = document.getElementById("contenido-3erSeccion");

    setTimeout(() => 
    {
        contenidoTotal_2daSeccion.setAttribute("hidden","true");
        contenidoTotal_3erSeccion.removeAttribute("hidden");
        contenidoTotal_3erSeccion.style.animation = "slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";

        // var texto1_3raSeccion = document.getElementById("informacion-preferencias");
        // texto1_3raSeccion.style.animation = "tracking-in-expand 3.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both";

    }, 1500);
}));

// "========================== 3ER SECCION DE PAGINA ======================================"
var btnVolver = document.getElementById("btn-volver2");
btnVolver.addEventListener("click", ( ()=> 
{
    var contenidoTotal_3erSeccion = document.getElementById("contenido-3erSeccion");
    contenidoTotal_3erSeccion.style.animation = "slide-out-right 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    var contenidoTotal_2daSeccion = document.getElementById("contenido-2daSeccion");

    setTimeout(() => 
    {
        contenidoTotal_3erSeccion.setAttribute("hidden","true");
        contenidoTotal_2daSeccion.removeAttribute("hidden");
        contenidoTotal_2daSeccion.style.animation = "slide-in-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }, 1500);
}));


// ----------------- LISTADO DE FUNCIONES -----------------
function inicializacionDePagina() 
{
    var contenidoTotal_1erSeccion = document.getElementById("contenido-1erSeccion");
    contenidoTotal_1erSeccion.style.animation = "slide-in-left 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
}

function seleccionarEnBuscadorDinamico(esOpcionUno)
{
    var btnAtributos = document.getElementById("btn-atributos");
    var btnObjetivos = document.getElementById("btn-objetivos");

    if (esOpcionUno == true) //Se selecciono la opcion "Atributos"
    {
        btnAtributos.style.borderBottom = "2px solid #c89c3c";
        btnObjetivos.style.borderBottom = "0px solid #c89c3c";
    }
    else //Se selecciono la opcion "Objetivos"
    {
        btnObjetivos.style.borderBottom = "2px solid #c89c3c";
        btnAtributos.style.borderBottom = "0px solid #c89c3c";
    }
}