let menuVisible = false;
//Función que oculta o muestra el menu

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    let skills = document.getElementById("skills");

    //La variable "distancia_skills" se define como la resta entre la altura de la ventana del navegador ("window.innerHeight") y la posición superior del elemento con la clase "skills" con respecto a la ventana ("skills.getBoundingClientRect().top").

    let distancia_skills =
        window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("python");
        habilidades[3].classList.add("mysql");
        habilidades[4].classList.add("figma");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
    efectoHabilidades();
};

let inicioLink = document.querySelector('a[href="#inicio"]');
let sobreMiLink = document.querySelector('a[href="#sobremi"]');
let skillLink = document.querySelector('a[href="#skills"]');
let curriculumLink = document.querySelector('a[href="#curriculum"]');
let porfolioLink = document.querySelector('a[href="#portfolio"]');
let contactoLink = document.querySelector('a[href="#contacto"]');

inicioLink.addEventListener("click", seleccionar);
sobreMiLink.addEventListener("click", seleccionar);
skillLink.addEventListener("click", seleccionar);
curriculumLink.addEventListener("click", seleccionar);
porfolioLink.addEventListener("click", seleccionar);
contactoLink.addEventListener("click", seleccionar);

let menuHamburguesa = document.querySelector(".nav-responsive");
menuHamburguesa.addEventListener("click", mostrarOcultarMenu);

function limpiarFormulario() {
    document.getElementById("miFormulario").reset();
}

/* **** Validaciones con Jquery ****
esos caracteres no dejara ingresar en los input ni textarea 
que se encuentran dentro del html

    let regAceptInput=/[*<>?¿¡!|¢£¤¥¦§©ª«¬­®$%·&()*-^"=\\§/]/gi
    let regAceptTextarea=/[*<>¢£¤|¥¦§¨©ª«¬­®&"=§]/gi
	$("form input").keyup(function(){
		let info=$(this).val()
		$(this).val(info.replace(regAceptInput,""))
	})
	$("form textarea").keyup(function(){
		let info=$(this).val()
		$(this).val(info.replace(regAceptTextarea,""))
	})
*/