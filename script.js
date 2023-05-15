









let lista1 = [];





let botao = document.getElementById("btg");
let botaoRemover = document.getElementById("btg-remover");
let botaoLimpar = document.getElementById("btg-limpar");
let lista = document.getElementById("lista");


botaoLimpar.addEventListener("click", function () {
    lista1 = []
    lista.style.display = "none";
});

botaoRemover.addEventListener("click", function () {
    lista.style.display = "block";
    let remover = lista1.length - 1;
    if(lista1.length == 0)
        lista.innerHTML = "<h1> Sua lista já está vazia</h1>"
    else{
    lista1.length = remover;
    let conteudo = ""
    for (let ingredientes of lista1) {
        conteudo += "<li>" + ingredientes + "</li>";
    }
    lista.innerHTML = conteudo;
}
});

botao.addEventListener("click", function () {

    lista.style.display = "block";
    let text = document.getElementById("texto");

    let texto = text.value;
    lista1.push(texto);
    let conteudo = ""
    for (let ingredientes of lista1) {
        conteudo += "<li>" + ingredientes + "</li>";
    }
    lista.innerHTML = conteudo
});