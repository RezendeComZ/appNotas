// Quando abrir ou depois de uma ação, deixar o campo de texto principal pronto para o input (selecionado)
// enter para enviar nos campos head e body
// Adicionar cores
// datas usando o módulo moment do npm
// converter numero ID para superscript usando o 'npm superscript-number'
// notas em um JSON externo
// Quando enviar um fixo, deselecionar a checkbox fixo em seguida
// Se estiver sem notas mostrar que não tem notas, vi que da pra usar o isEmptyObject() do jQuerry, mas deve da pra implementar algo sem ele
// Se add e encontrar uma nota duplicada avisar e não adicionar
// testando adicionar esse texto pelo github

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

addNota('Ir ao mercado', 'Comprar azeite e arroz', true)

const apagaNota = numID => {
  encontrado = false;
  for (let i = 0; i < notas.length; i += 1) {
    if (notas[i].id === numID) {
      encontrado = true;
      notas.splice(i, 1);
    }
  }
  if (encontrado){
    /// alert(`Objeto com a ID ${numID} excluído.`)
    console.log(`Objeto com a ID ${numID} excluído.`)
  } else {
    console.log(`Objeto com a ID ${numID} não foi encontrado, nada foi excluído.`)
  }
}

apagaNota(5);

// HTML:
const headField = document.querySelector('#headField');
const bodyField = document.querySelector('#bodyField')
const fixo = document.querySelector('#fixo');
const exibeEmBloco = (reg, headline, body, pinned) => { // div de cada item
  let div = `<div class="postit pin${pinned}">`;
  div += `<div> <h6>${reg}</h6> <h3>${headline}</h3> </div>`;
  div += '</br>'
  div += `<div><p>${body}</p></div>`;  
  div += `<button onclick="btApagar(${reg})">X</button>`
  div += '</div>'

  return div
}

const exibeNotas = () => {
  let lista = '';
  if (typeof notas[0] === 'undefined') {
    lista += '<p>Você não tem notas</p>'
  }
  for (let obj of notas) {
    lista += exibeEmBloco(obj.id, obj.h, obj.b, obj.pin)
  }
  return document.getElementById('listaNotas').innerHTML = lista
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

  }
  exibeNotas() // atualiza
}

exibeNotas()
