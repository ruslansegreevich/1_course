const tax = 80;
const timeWork = (11 - 2) * 5;
const timeOrder = 40;

console.log('Смогу ли я работать? ' + (timeWork >= timeOrder));
console.log('Стоимость работ: ' + (tax * timeOrder));