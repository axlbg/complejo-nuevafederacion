
function clickCirculo1()
{
    document.getElementById("inicio").style.backgroundImage = 'url("../img/portada/01.jpeg")';
    limpiarCirculos()
    document.getElementById("circulo1").className = "bi bi-circle-fill";

}
function clickCirculo2()
{
    document.getElementById("inicio").style.background = 'url("../img/portada/02.jpeg")  no-repeat center center / cover';
    limpiarCirculos()
    document.getElementById("circulo2").className = "bi bi-circle-fill";
    
}
function clickCirculo3()
{
    document.getElementById("inicio").style.background = 'url("../img/portada/03.jpeg")  no-repeat center center / cover';
 
    limpiarCirculos()
    document.getElementById("circulo3").className = "bi bi-circle-fill";
    
}
function clickCirculo4()
{
    document.getElementById("inicio").style.background = 'url("../img/portada/04.jpeg")  no-repeat center center / cover';
    limpiarCirculos()
    document.getElementById("circulo4").className = "bi bi-circle-fill";
    
}
    
function limpiarCirculos()
{
    document.getElementById("circulo1").className = "bi bi-circle";
    document.getElementById("circulo2").className = "bi bi-circle";
    document.getElementById("circulo3").className = "bi bi-circle";
    document.getElementById("circulo4").className = "bi bi-circle";
}
 //