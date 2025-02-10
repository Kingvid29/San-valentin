// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: Tu cabello rizado es como un sueño encantado, time: 30 },
  { text: cada rizo en su danza, un misterio delicado. time: 18 },
  { text: Color canela que brilla con la luz del día, time: 27 },
  { text: como el sol que se esconde, dejando magia y poesía. time: 32 },
  { text: Tu sonrisa, mi amor, es un canto divino, time: 33 },
  { text: un suspiro al viento, un perfume de destino. time: 41 },
  { text: Me mata de amor, cada vez que me miras, time: 47 },
  { text: y en tu risa encuentro mil dulces melodías. time: 54 },
  { text: Hoy celebro tu ser, tan radiante y tan pura, time: 59 },
  { text: mi amor por ti es un fuego que nunca se apura. time: 67 },
  { text: San Valentín no basta para expresarte lo que siento, time: 72 },
  { text: pero aquí va mi corazón, en un pequeño intento. time: 78 },
  { text: ¡Feliz San Valentín, mi amor! time: 83 },
  { text: Solo tú eres mi todo, mi razón y mi fin. time: 91 },

];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
