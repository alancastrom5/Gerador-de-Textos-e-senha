// Lista de palavras fictícias
const palavras = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "printing",
    "variations",
    "accident",
    "versions",
    "1500s",
    "1960s",
];

// Função para gerar uma palavra aleatória
function gerarPalavraAleatoria() {
    const indice = Math.floor(Math.random() * palavras.length);
    return palavras[indice];
}

// Função para gerar uma frase com um número especificado de palavras
function gerarFrase(numPalavras, limite) {
    let frase = "";
    for (let i = 0; i < numPalavras; i++) {
        const palavra = gerarPalavraAleatoria();
        if (frase.length + palavra.length <= limite) {
            frase += palavra;
            if (i < numPalavras - 1 && frase.length + 1 <= limite) {
                frase += " ";
            }
        } else {
            break; // Se exceder o limite, pare de adicionar palavras
        }
    }
    return frase;
}

// Exemplo de uso
const campoDeTexto = document.getElementById("texto"); // Substitua com o ID do seu campo de texto
setInterval(() => {
    campoDeTexto.textContent = gerarFrase(20, 120); // Gere uma frase com até 120 caracteres
  }, 5000);