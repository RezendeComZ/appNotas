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
  }
]

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
mostraNotas();

const mostraHeadlines = () => {
  console.log('- Headlines:')
  for (let obj of notas){
    console.log('-----');
    console.log(obj.h);
  }
  console.log('-----');
}

mostraHeadlines();