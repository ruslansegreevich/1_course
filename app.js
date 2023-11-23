/*
    Задача вывести в консоль строку "Я люблю JS !" из массива,
    проходя циклом в обратном порядкуе, не используя метод revers.
    const arr = ['!', 'JS', 'люблю', 'Я'];
 */

const arr = ['!', 'JS', 'люблю', 'Я'];

let newArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);

}
console.log(newArray.join(' '));
console.log(arr.reverse().join(' '));
