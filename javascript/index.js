const productosInfo = {
    juego1:{
        imagen:'../img/juego-1.jfif',
        titulo:'Operación Libertad',
        parrafo:'Un juego de acción y estrategia en el que debes liderar una rebelión contra un régimen mitico y malvado'
    },
    juego2:{
        imagen:'../img/juego-2.jfif',
        titulo:'Velocidad Extrema',
        parrafo:'Un juego de carreras alucinante en el que puedes personalizar tu coche, competir con otros jugadores y explorar diferentes circuitos'
    },
    juego3:{
        imagen:'../img/juego-3.jfif',
        titulo:'Zona de Combate',
        parrafo:'Un juego de disparos realista en el que debes sobrevivir a diferentes misiones en medio de una guerra.'
    },
    juego4:{
        imagen:'../img/juegos-valorados-1.1.png',
        titulo:'Mar de leyendas',
        parrafo:'Sumérgete en un emocionante viaje a través de mares embravecidos, llenos de tesoros ocultos, criaturas mitológicas y desafíos piratas. En "Mar de Leyendas", tu astucia y valentía serán puestas a prueba mientras navegas en busca de fama y fortuna en un vasto océano lleno de secretos.'
    },
    juego5:{
        imagen:'../img/juegos-valorados-2.1.png',
        titulo:'Fuerza justiciera',
        parrafo:'Únete a un equipo de superhéroes dotados de poderes extraordinarios, dispuestos a enfrentarse a villanos despiadados y proteger la ciudad de la destrucción. En equilibrio entre la responsabilidad de tus habilidades sobrehumanas y el combate contra el crimen.'
    },
    juego6:{
        imagen:'../img/juegos-valorados-3.1.png',
        titulo:'Punto Cero: Disparo cibernetico',
        parrafo:'Sumérgete en un futuro distópico donde la realidad virtual y la violencia cibernética se entrelazan. En "Punto Cero: Disparo Cibernético", la acción trepidante y los tiroteos intensos te llevarán a través de paisajes urbanos sombríos mientras te enfrentas a enemigos implacables en una lucha por el control de la red'
    },
    juego7:{
        imagen:'../img/juegos-valorados-4.1.png',
        titulo:'Pesadilla eterna',
        parrafo:'Adéntrate en un mundo de oscuridad y terror psicológico en "Pesadilla Eterna". En este juego de horror, cada rincón está impregnado de pesadillas que desafían la realidad. Enfréntate a tus miedos más profundos mientras exploras entornos aterradores y luchas por sobrevivir en medio de una pesadilla eterna.'
    },
}

const selector = document.getElementById("seleccion");

const valorarImagen = document.getElementById("valorar-img");
const valorarTitle = document.getElementById("valorar-title");
const valorarInfo = document.getElementById("valorar-info");

function actualizarInformacion() {
    const productoElegido = seleccion.value;
    const infoProductos = productosInfo[productoElegido];

    valorarImagen.src = infoProductos.imagen;
    valorarTitle.textContent = infoProductos.titulo;
    valorarInfo.textContent = infoProductos.parrafo;
}  
