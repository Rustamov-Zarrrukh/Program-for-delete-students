let students = ["Shahram", "Amir", "Akbar", "Zarruh"]

/* Add */
let ask = prompt('Какой изи учеников удалить?')

//Remove


// students.splice(index, amount) //Какой элемент удалить по индексу и сколлько
// students.splice(2, 1)

let idx = students.indexOf(ask) // выведет index студента

students.splice(idx, 1) //Удаляю по идексу имени




console.log( students);
