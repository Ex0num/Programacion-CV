

var btnObjetivos = document.getElementById("btn-objetivos");

btnObjetivos.addEventListener("click", ( ()=> 
{
    
}));


var btnVerMas = document.getElementById("btn-verMas");

btnVerMas.addEventListener("click", ( ()=> 
{
    var contenidoTotal = document.getElementById("contenido-total");
    contenidoTotal.style.animation = "slide-out-left 1s cubic-bezier(0.550, 0.085, 0.680, 0.530) both";
    var contenidoVerMas = document.getElementById("contenido-verMas");

    setTimeout(() => 
    {
        contenidoTotal.setAttribute("hidden","true");
        contenidoVerMas.removeAttribute("hidden");
        contenidoVerMas.style.animation = "slide-in-right 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both";
    }, 1500);
}));