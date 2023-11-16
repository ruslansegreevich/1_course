// 25 урок, задача
result = prompt('Сколько будет 7 + или - 15 ?');

if (Number(result) === 22) {
    console.log('Успех');
} else if (Number(result) === -8) {
    console.log('Успех');
} else if (result === 'Я не робот') {
    console.log('Успех');
} else {
    console.log('Ты РОБОТ !!!')
}

switch (result) {
    case 'Я не робот':
        console.log('Успех');
        break;
    case '22':
        console.log('Успех');
        break;
    case '-8':
        console.log('Успех');
        break;

    default:
        console.log('Ты РОБОТ !!!');
}