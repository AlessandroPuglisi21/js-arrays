const teachers = [  
  'Nathan',  
  'Ed',  
  'Fabio',  
  'Phil',  
  'Carlo',  
  'Lewis', 
  'Luca']; 

// NON MODIFICARE QUESTA VARIABILE
console.log(teachers);

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
console.log('ESERCIZIO 1');
const fourthTeacher = teachers[3];
console.log(fourthTeacher);

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
console.log('ESERCIZIO 2');
teachers[4] = 'Patrick';
console.log(teachers); 

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
console.log('ESERCIZIO 3');
const lastTeacher = teachers.pop();
console.log(lastTeacher); 
console.log(teachers); 

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
console.log('ESERCIZIO 4');
const firstTeacher = teachers.shift();
console.log(firstTeacher); 
console.log(teachers); 

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
console.log('ESERCIZIO 5')
 teachers.push('Vanessa')
console.log(teachers)

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
console.log('ESERCIZIO 6')
teachers.unshift('Sarah')
console.log(teachers)

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
console.log('ESERCIZIO 7')
const isFabioPresent = teachers.includes('Fabio')
console.log(isFabioPresent)

const isAntonioPresent = teachers.includes('Antonio')
console.log(isAntonioPresent)

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
console.log('ESERCIZIO 8')
const lewisIndex = teachers.indexOf ('Lewis');
console.log(lewisIndex)

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString

console.log('ESERCIZIO 9')
const teachersString = teachers.join(', ');
console.log(teachersString)
// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty
console.log('ESERCIZIO 10')
const isTeachersEmpty = [];

if(teachers.length === 0)
{
  console.log ('Array Vuoto')
}
else{
  console.log(`'Array' ${[teachers.length]}`)
}