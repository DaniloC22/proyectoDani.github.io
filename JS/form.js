let contador = 0;
let m = false;
let s = false;
let primary = true;
let cuenta = 10; 
let second = true;

// Obtener referencias a los botones y a los elementos
const botonIncrementar = document.getElementById('cookie');
const botonDisminuir = document.getElementById('delete');
const valorContador = document.getElementById('valor-contador');
const primer_mejora = document.getElementById('mejora1');
const segunda_mejora = document.getElementById('mejora2');
const clicker = document.getElementById('segundos');


/* INCREMENTO */
botonIncrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
    if (m==true){
        primer_mejora.style.backgroundColor = 'red';
        contador+=4;
    }if (s==true){
        segunda_mejora.style.backgroundColor = 'red';
        contador+=19;
    }
});


/* DECRECIMIENTO */
botonDisminuir.addEventListener('click', () => {
    contador--;
    valorContador.textContent = contador;
});


/* MEJORA BOMBA +5 CLICKS */
primer_mejora.addEventListener('click', () => {
    if(contador>=50){
        m = true;
        while(primary==true){
            contador-= 50;
            primary=false;
        }
    }
});


/* MEJORA SANDWICH +20 CLICKS*/
segunda_mejora.addEventListener('click', () => {
    if(contador>=200){
        s = true;
        while(second==true){
            contador-= 200;
            second=false;
        }
    }
});


/* CLICK AUTOMATICO */
clicker.textContent= "CLICK AUTOMÁTICO: " + cuenta + " COOKIES";

clicker.addEventListener('click', () => {
    clicker.textContent= "CLICK AUTOMÁTICO: " + cuenta + " COOKIES";
    if(contador>=cuenta){
        contador= contador-cuenta;
        cuenta= cuenta*2;
        setInterval(() => {
            botonIncrementar.click();
        }, 1000);
    }
});


/* CAMBIAR IMAGENES */
function cambiarImagenDBZ(){
    if(contador>=500){
        var imagen = document.getElementById("cookie");
        var estilo = window.getComputedStyle(imagen);
        var fondo = estilo.backgroundImage;
        
        if (fondo.includes("cookie_spt.png") || fondo.includes("pou_skin_spt.png") || fondo.includes("perv_skin_spt.png") || fondo.includes("pokeball_spt.png")) {
            imagen.style.backgroundImage = "url('Recursos/IMG/dbz_cookie_spt.png')";
            contador -= 500;
        } 
    }
} 

function cambiarImagenPERV(){
    if(contador>=500){
        var imagen = document.getElementById("cookie");
        var estilo = window.getComputedStyle(imagen);
        var fondo = estilo.backgroundImage;
        
        if (fondo.includes("cookie_spt.png") || fondo.includes("pou_skin_spt.png") || fondo.includes("dbz_cookie_spt.png") || fondo.includes("pokeball_spt.png")) {
            imagen.style.backgroundImage = "url('Recursos/IMG/perv_skin_spt.png')";
            contador -= 500;
        } 
    }
} 

function cambiarImagenPOK(){
    if(contador>=500){
        var imagen = document.getElementById("cookie");
        var estilo = window.getComputedStyle(imagen);
        var fondo = estilo.backgroundImage;
        
        if (fondo.includes("cookie_spt.png") || fondo.includes("pou_skin_spt.png") || fondo.includes("perv_skin_spt.png") || fondo.includes("dbz_cookie_spt.png")) {
            imagen.style.backgroundImage = "url('Recursos/IMG/pokeball_spt.png')";
            contador -= 500;
        } 
    }
} 

function cambiarImagenPOU(){
    if(contador>=500){
        var imagen = document.getElementById("cookie");
        var estilo = window.getComputedStyle(imagen);
        var fondo = estilo.backgroundImage;
        
        if (fondo.includes("cookie_spt.png") || fondo.includes("dbz_cookie_spt.png") || fondo.includes("perv_skin_spt.png") || fondo.includes("pokeball_spt.png")) {
            imagen.style.backgroundImage = "url('Recursos/IMG/pou_skin_spt.png')";
            contador -= 500;
        } 
    }
} 

/* NO ESPACIOS */
function noEspacios(event){
    if(event.keyCode===32){
        event.preventDefault();
    }
}