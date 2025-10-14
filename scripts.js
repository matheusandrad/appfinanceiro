function adicionaParagrafo() {      // OK
    console.log("Clicou");
    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = "Parágrafo adicionado por código";
    document.getElementById("paragrafoId").appendChild(paragrafo);
}

function limpaConsole() {       // OK
    console.clear();
}

function limpaParagrafo() {     // OK, limpa um por vez
    console.log("Parágrafos limpos")
    const p = document.getElementById("paragrafoId");
    p.removeChild(p.lastChild);

}

// Feita com IA =(
function adicionaTabela() {
  // pega o corpo da tabela
  const tbody = document.getElementById('tbody');
  
  // cria uma nova linha
  const novaLinha = document.createElement('tr');

  // cria e adiciona as células
  const colunas = ['Data', 'Categoria', 'Valor', 'Comentário'];
  for (let i = 0; i < colunas.length; i++) {
    const td = document.createElement('td');
    // td.contentEditable = true; // Torna o conteúdo da célula editável
    td.textContent = ''; // pode preencher com valores padrão se quiser
    novaLinha.appendChild(td);
  }

  // adiciona a nova linha ao tbody
  tbody.appendChild(novaLinha);
}

let dados = ''
function dadosSimulados() {
  let dados = `{
    "data":"10/10/2025",
    "categoria":"Alimentação",
    "valor": 10,
    "comentario": "comida"
    }`
  return JSON.parse(dados)
}

// Script para importar a navbar em todas as páginas | arquivo navbar.html
function navbar () {
  fetch("/navbar.html")
    .then(Response => Response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;
    });  
}