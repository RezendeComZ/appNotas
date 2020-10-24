// Fazer uma function pra simplificar a processaBloco()
// Quando abrir ou depois de uma ação, deixar o campo de texto principal pronto para o input (selecionado)
// enter para enviar nos campos head e body
// Adicionar cores
// datas usando o módulo moment do npm
// converter numero ID para superscript usando o 'npm superscript-number'
// notas em um JSON externo
// Se add e encontrar uma nota duplicada avisar e não adicionar
// busca
// poder trocar de tema
// fazer um layout separado caso só tenha headline

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
    h: 'Assistir Matrix',
    b: 'Pegar o bluray',
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
const processaBloco = (reg, headline, body, pinned) => { // div de cada item  
  
  const geraCompleto = prop => {
    posts[prop] += `<div class="postit pin${pinned}">`;
    posts[prop] += `<div> <h6>${reg}</h6> <h3>${headline}</h3> </div>`;
    posts[prop] += '</br>'
    posts[prop] += `<div><p>${body}</p></div>`;  
    posts[prop] += `<button onclick="btApagar(${reg})">X</button></div>`
  }
  const geraParcial = prop => {
    posts[prop] += `<div class="postit pin${pinned}">`;
    posts[prop] += `<div> <h6>parcial${reg}</h6> <h3>${headline}</h3> </div>`;
    posts[prop] += '</br>'
    posts[prop] += `<div><p>${body}</p></div>`;  
    posts[prop] += `<button onclick="btApagar(${reg})">X</button></div>`    
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
  console.log(posts)
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
  }
  exibeNotas() // atualiza
}

exibeNotas();