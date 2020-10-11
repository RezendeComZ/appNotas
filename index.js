// hEADLINE, bODY, dATA

let notas = [
  {
    id: 1,
    h: 'Primeira nota',
    b: 'Aqui body da primeira'
  },
  {
    id: 2,
    h: 'Segunda nota',
    b: 'Body da segunda nota'
  },
  {
    id: 3,
    h: 'Ouvir música',
    b: 'No player do spotify'

  },
  {
    id: 5,
    h: 'Assistir matrix',
    b: 'Pegar o bluray'
  },
  {
    id: 6,
    h: 'Ver série',
    b: 'Pelo app da Netflix'
  },
  {
    id: 7,
    h: 'Comprar livro',
    b: 'Clean code'
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
const addNota = (headline, body) => {
  let novaID = notas[notas.length - 1].id + 1 
  notas.push({id: novaID, h: headline, b: body})
}

addNota('Ir ao mercado', 'Comprar azeite e arroz')

mostraNotas();

//
const apagaNota = numID => {

  let encontrado = false;
  for (let obj of notas) {
    if (obj.id === numID){
      console.log('aaaa', obj)
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


apagaNota(5);

//
console.log(notas)
