// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [

  { text: "Paola Karina, mi amor y mi alegría,", time: 30 },
  { text: "contigo la vida es una eterna fantasía.", time: 18 },
  { text: "Tu piel de canela brilla como el sol,", time: 27 },
  { text: "y tu risa es el ritmo que hace bailar mi corazón.", time: 32 },
  { text: "Con tu cabello rizado, lleno de movimiento,", time: 33 },
  { text: "me haces perder el rumbo y también el aliento.", time: 41 },
  { text: "Eres como una canción, tan dulce y tan viva,", time: 47 },
  { text: "con cada paso que das, mi vida se motiva.", time: 54 },
  { text: "En tus ojos veo un mundo de colores,", time: 59 },
  { text: "y en tu abrazo me olvido de todos mis temores.", time: 67 },
  { text: "Eres mi sol cuando se oculta la luna,", time: 72 },
  { text: "y mi luna cuando el día me abruma.", time: 78 },
  { text: "Contigo, Paola, todo es un juego,", time: 83 },
  { text: "bailamos juntos en este amor tan luego.", time: 91 },
  { text: "Te amo, te adoro, y en este San Valentín,", time: 97 },
  { text: "solo tú eres mi amor, mi reina y mi fin.", time: 104 },

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
