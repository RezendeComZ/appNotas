// Ver se tem jeito melhor de o pin começar direto em "false" caso não seja marcado true

let notas = [
  {
    id: 1,
    h: 'Primeira nota',
    b: 'Aqui body da primeira',
    pin: false,
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
  }
]

//
const mostraNotas = () => {
  console.log('- Notas completas:');
  for (let obj of notas){ // For of para arrays e strings
    console.log('-----');
    for (let prop in obj) { // For in para objetos
      console.log(obj[prop]);
    }
  }
  console.log('-----');
}
// mostraNotas();

//
const mostraHeadlines = () => {
  console.log('- Headlines:')
  for (let obj of notas){
    console.log('-----');
    console.log(obj.h);
  }
  console.log('-----');
}

mostraHeadlines();

//
const addNota = (headline, body, pinned) => {
  let fixo = false;
  if (pinned){
    fixo = true
  }
  let novaID = notas[notas.length - 1].id + 1 
  notas.push({id: novaID, h: headline, b: body, pin: fixo})
}

addNota('Ir ao mercado', 'Comprar azeite e arroz', true)

mostraNotas();

//
/*
const apagaNota = numID => { // Não funciona ok, tá funcionando baseado no index, a partir do momento que apagar o primeiro, o resto vai zuar

  let encontrado = false;
  for (let obj of notas) {
    if (obj.id === numID){
      console.log('teste pra ver se chegou aqui', obj)
      encontrado = true;
      notas.splice(numID - 2, 1);
    }
  }
  if (encontrado){
    console.log(`Objeto com a ID ${numID} excluído.`)
  } else {
    console.log(`Objeto com a ID ${numID} não foi encontrado, nada foi excluído.`)
  }
}
*/

const apagaNota = numID => {
  encontrado = false;
  for (let i = 0; i < notas.length; i += 1) {
    if (notas[i].id === numID) {
      encontrado = true;
      notas.splice(i, 1);
    }
  }
  if (encontrado){
    console.log(`Objeto com a ID ${numID} excluído.`)
  } else {
    console.log(`Objeto com a ID ${numID} não foi encontrado, nada foi excluído.`)
  }
}

apagaNota(5);
apagaNota(7);

//
const mostraFixos = () => {
  console.log(notas.filter(prop => {return prop.pin === true}))
}
mostraFixos();

// HTML
const headField = document.querySelector('#headField');


const btEnviar = () => {
  addNota(headField.value)
}

