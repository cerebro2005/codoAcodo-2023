let menu = `<div class="logo">
<a href="#">JPDesign</a>
</div>
<div id="weather"></div>
<nav id="nav">
<ul>
    <li>
        <a href="#inicio">INICIO</a>
    </li>
    <li>
        <a href="#sobremi">SOBRE MI</a>
    </li>
    <li>
        <a href="#skills">SKILLS</a>
    </li>
    <li>
        <a href="#curriculum">CURRICULUM</a>
    </li>
    <li>
        <a href="#portfolio">PORTFOLIO</a>
    </li>
    <li>
        <a href="#contacto">CONTACTO</a>
    </li>
</ul>
</nav>
<div class="nav-responsive">
<i class="fa-solid fa-bars"></i>
</div>`;
document.querySelector("header").innerHTML = menu;

let cardPresentacion = `
<div class="contenido-banner">
    <div class="contenedor-img">
        <img src="img/damianrolcac.jpg" alt="" />
    </div>
    <h1>
        <span>PEREZ</span>
        <span>JUAN</span>
    </h1>
    <h2>Desarrollador de Software</h2>
    <h2>Full Stack Python</h2>
    <!-- donde estan los "#" se debe rellenar con las url segun corespondan -->
    <div class="redes">
        <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-skype"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        <a href="#"><i class="fa-solid fa-rss"></i></a>
    </div>
</div>`;

document.querySelector(".inicio").innerHTML = cardPresentacion;

let sobreMi = `
<div class="contenido-seccion">
    <h2>Sobre Mí</h2>
    <p>
        <span>Hola, soy "Perez, Juan".</span> Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quisquam unde
        soluta minima necessitatibus, voluptas consectetur vero
        officiis quas, explicabo deleniti repellendus aliquid
        debitis maiores numquam voluptate reprehenderit in
        delectus dolores.
    </p>

    <div class="fila">
        <!-- datos personales -->
        <div class="col">
            <h3>Datos Personales</h3>
            <ul>
                <li>
                    <strong>Cumpleaños</strong>
                    15-03-1974
                </li>
                <li>
                    <strong>Teléfono</strong>
                    +54 011 4343443
                </li>
                <li>
                    <strong>Email</strong>
                    codoacodo@example.com
                </li>
                <li>
                    <strong>Website</strong>
                    <a href= 'https://tp1codoacodo2023.netlify.app/'>https://tp1codoacodo2023.netlify.app/</a>
                </li>
                <li>
                    <strong>Dirección</strong>
                    Av. Gral. Paz 12206-12140, Buenos Aires
                </li>
                <li>
                    <strong>Cargo</strong>
                    <span>FREELANCE JUNIOR</span>
                </li>
            </ul>
        </div>

        <!-- intereses -->
        <div class="col">
            <h3>Intereses</h3>
            <div class="contenedor-intereses">
                <div class="interes">
                    <i class="fa-solid fa-gamepad"></i>
                    <span>JUEGOS</span>
                </div>
                <div class="interes">
                    <i class="fa-solid fa-headphones"></i>
                    <span>MUSICA</span>
                </div>
                <div class="interes">
                    <i class="fa-solid fa-plane"></i>
                    <span>VIAJAR</span>
                </div>
                <div class="interes">
                    <i class="fa-solid fa-desktop"></i>
                    <span>PCs</span>
                </div>
                <div class="interes">
                    <i class="fa-regular fa-futbol"></i>
                    <span>FUTBOL</span>
                </div>
                <div class="interes">
                    <i class="fa-solid fa-book"></i>
                    <span>LIBROS</span>
                </div>
                <div class="interes">
                    <i class="fa-solid fa-motorcycle"></i>
                    <span>MOTOS</span>
                </div>
                <div class="interes">
                    <i class="fa-solid fa-camera"></i>
                    <span>FOTOS</span>
                </div>
            </div>
        </div>
    </div>
    <!-- se debe reemplazar el "#" por ruta al archivo.pdf -->
    <button>
        <a href="./assets/Curriculum.pdf" download
            >Descargar CV
            <i class="fa-solid fa-paper-plane"></i>
        </a>
        <span class="overlay"></span>
    </button>
</div>`;

document.querySelector(".sobremi").innerHTML = sobreMi;

let skill = `
<div class="contenido-seccion">
    <h2>Skills</h2>
    <div class="fila">
        <!-- Technical Skill -->
        <div class="col">
            <h3>Aptitudes Técnicas</h3>
            <div class="skill">
                <span>JavaScript</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>75%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <span>HTML & CSS</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>89%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <span>Python</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>85%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <span>MySql</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>81%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <span>Figma</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>55%</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- Professional Skills -->
        <div class="col">
            <h3>Aptitudes Profesionales</h3>
            <div class="skill">
                <span>Comunicación</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>80%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <span>Trabajo en Equipo</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>70%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <span>Creatividad</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>99%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <span>Dedicación</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>100%</span>
                    </div>
                </div>
            </div>
            <div class="skill">
                <span>Gestión de Proyecto</span>
                <div class="barra-skill">
                    <div class="progreso">
                        <span>94%</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

document.querySelector(".skills").innerHTML = skill;

let educacion = `<h3>Educación</h3>`;
let trabajo = `<h3>Experiencia de trabajo</h3>`;

for (const card of curriculum) {
    if (card.referencia == "Educacion") {
        educacion += `<div class="item izq">
        <h4>${card.titulo}</h4>
        <span class="casa">${card.lugar}</span>
        <span class="fecha">${card.periodo}</span>
        <p>${card.descripcion}</p>
        <div class="conectori">
            <div class="circuloi"></div>
        </div>
        </div>`;
        document.querySelector(".izquierda").innerHTML = educacion;
    } else {
        trabajo += `<div class="item der">
            <h4>${card.titulo}</h4>
            <span class="casa">${card.lugar}</span>
            <span class="fecha">${card.periodo}</span>
            <p>${card.descripcion}</p>
            <div class="conectord">
            <div class="circulod"></div>
            </div>
            </div>`;
        document.querySelector(".derecha").innerHTML = trabajo;
    }
}

let cardporfolio = '';

for (let card of datosporfolio) {
    cardporfolio += `
    <div class="proyecto">
    <img src=${card.url_img} alt="" />
        <div class="overlay">
            <h3>${card.titulo}</h3>
            <p>${card.descripcion}</p>
        </div>
    </div>
</div>
`;
document.querySelector('.galeria').innerHTML = cardporfolio;
}

/* usando API de YOUTUBE */
// 2. Este código carga el código IFrame Player API de forma asíncrona.
let tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. Esta función crea un <iframe> (reproductor de YouTube)
// después de que se descargue el código de la API.
let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        width: "100%",
        height: "300",
        videoId: "nB33NjkoCYw",
        playerVars: {
            playsinline: 1,
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
        },
    });
}

// 4. La API llamará a esta función cuando el reproductor de vídeo esté listo.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. La API llama a esta función cuando cambia el estado del reproductor.
// La función indica que al reproducir un vídeo (estado=1),
// el reproductor debe reproducir durante cinco coma cinco segundos y luego se detiene.
let done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 5500);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}