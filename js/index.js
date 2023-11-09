const CORRECT_ANSWER = "Ed Sheeran";
let isCorrect = false;

while (!isCorrect) {
    const QUESTION = prompt("¿Quién canta la canción Shape Of You? a) Ed Sheeran; b) Justin Bieber; c) Adele; d) Shawn Mendes");
    if (QUESTION === CORRECT_ANSWER) {
        isCorrect = true;
        alert("¡La respuesta es correcta!");
    } else {
        alert("Esta no es la respuesta correcta. Sigue buscando...");
    }
}

