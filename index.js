// hEADLINE, bODY, dATA

let notas = [
  {
    h: 'Primeira nota',
    b: 'Aqui é a primeira nota'
  },
  {
    h: 'Segunda nota',
    b: 'Texto da segunda nota'
  }
]

const mostraNotas = () => {
  for (let obj of notas){ // For of para arrays e strings
    console.log('-----');
    for (let prop in obj) { // For in para objetos
      console.log(obj[prop]);
    }
  }
  console.log('-----');
}

mostraNotas();

const mostraHeadlines = () => {
  for (let obj of notas){
    console.log(obj.h);
  }
}

console.log('Headlines:')

mostraHeadlines();