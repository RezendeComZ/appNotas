// quando postar animar postit ou piscar cor por coisa de 1 segundo (ai remover o alert quando posta)
// Undo
// Trocar 'alert()' por mensagem com display:none
// não mostrar a barra se não tiver post fixo
// Adicionar via link usando parametros do express /:nota/:body?/:fixo? // query params
// Rodar no Node e o Banco de dados ficar em um JSON que o Node acessa via FTP no servidor. Seria possível ser https://ga.brielrezen.de:3000/appNotas ? E o JSON ser acessível pelo Node via FTP
// Modularizar (dividir em js)
// Quando abrir ou depois de uma ação, deixar o campo de texto principal pronto para o input (selecionado)
// Enter não está mais quebrando linha no body
// Adicionar cores
// datas usando o módulo moment do npm
// converter numero ID para superscript usando o 'npm superscript-number'
// notas em um JSON externo
// Se add e encontrar uma nota duplicada avisar e não adicionar
// busca
// poder trocar de tema
// Usar o setTimeout() // É um método de window, window.setTimeout // Não precisa chamar windows, pq no navegador windows é o objeto GLOBAL
// senha
// login
// cadastro

let notas = [
  {
    id: 1,
    h: 'Primeira nota',
    b: 'Aqui body da primeira',
    pin: false
  },
  {
    id: 2,
    h: 'Segunda nota',
    b: 'Body da segunda nota',
    pin: false
  },
  {
    id: 3,
    h: 'Ouvir música',
    b: 'No player do spotify',
    pin: true
  },
  {
    id: 5,
    h: 'Ajustar esse sem body',
    b: '',
    pin: false
  },
  {
    id: 6,
    h: 'Ver série',
    b: 'Pelo app da Netflix',
    pin: false
  },
  {
    id: 7,
    h: 'Comprar livro',
    b: 'Clean code',
    pin: true
  },
  {
    id: 8,
    h: 'Aprender a usar JSON',
    b: 'e usar nesse mesmo projeto',
    pin: false
  },
  {
    id: 9,
    h: 'Mais uma nova coisa',
    b: 'um outro item'    
  }
];

let proximaID;
if (typeof notas[0] === 'undefined'){
  proximaID = 1
} else {
  proximaID = notas[notas.length - 1].id + 1;
}

const addNota = (headline, body, pinned) => {
  let fixo = false;
  if (pinned){
    fixo = true  // testar dps fixo = pinned no lugar desse if
  }
  notas.push({id: proximaID, h: headline, b: body, pin: fixo})
  proximaID += 1;
}

const apagaNota = numID => {
  encontrado = false;
  for (let i = 0; i < notas.length; i += 1) {
    if (notas[i].id === numID) {
      encontrado = true;
      notas.splice(i, 1);
      alert(`Objeto com a ID ${numID} excluído.`)
    }
  }
}

// HTML:
const headField = document.querySelector('#headField');
const bodyField = document.querySelector('#bodyField')
const fixo = document.querySelector('#fixo');
let posts = {'fixos': '','naoFixos':''};
const deuEnter = () => {
  if (event.keyCode === 13) btEnviar();
}
const deuCtrlEnter = () => {
  if (event.keyCode === 13 && event.ctrlKey) btEnviar();
  if (event.keyCode === 13 && event.metaKey) btEnviar(); /// via CMD
}

const processaBloco = (reg, headline, body, pinned) => { // div de cada item  
  const geraCompleto = prop => {
    posts[prop] +=
    `<div class="postit pin${pinned}">
    <div class="regPost">
    <h6>${reg}</h6>
    </div>
    <div class="headPost">
    <h3>${headline}</h3>
    </div>
    </br>
    <div class="bodyPost">
    <p>${body}</p>
    </div>
    <button class="botaoPost" onclick="btApagar(${reg})">X</button></div>`;
  }
  const geraParcial = prop => {
    posts[prop] +=
    `<div class="postit pin${pinned}">
    <div> <h6>${reg}</h6> <h3>${headline}${body}</h3> </div>
    </br>
    <button class="botaoPost" onclick="btApagar(${reg})">X</button></div>`;  
  }
  if (headline !== '' && body !== '') {
    if (pinned) {
      geraCompleto('fixos');
    } else {
      geraCompleto('naoFixos')
    }
  } else {
    if (pinned) {
      geraParcial('fixos');
    } else {
      geraParcial('naoFixos')
    }
  }   
}

const exibeNotas = () => {
  posts = {'fixos': '','naoFixos':''};
  if (typeof notas[0] === 'undefined') {
    return document.querySelector('.listaNotas').innerHTML = '<p>Você não tem notas</p>'
  }
  for (let obj of notas) {    
    processaBloco(obj.id, obj.h, obj.b, obj.pin);
  }
  document.querySelector('.fixo').innerHTML = posts.fixos
  document.querySelector('.naoFixo').innerHTML = posts.naoFixos
}
const btApagar = id => {
  apagaNota(id);
  exibeNotas();
}

const btEnviar = () => {
  if (headField.value === '' && bodyField.value === '') {
    alert('Preencha ao menos um campo')
  } else {
    alert('Item adicionado')
    addNota(headField.value,bodyField.value,fixo.checked);
    document.getElementById("fixo").checked = false;
    escondeInserir()
  }
  exibeNotas() // atualiza
}

exibeNotas();

document.onkeyup = e => {
  if (e.which === 192) mostraInserir();
}

const mostraInserir = () => {
  document.querySelector('.inserir').style.display = 'block';
  document.getElementById("headField").focus()
}

const escondeInserir = () => {
  document.querySelector('.inserir').style.display = 'none'
}