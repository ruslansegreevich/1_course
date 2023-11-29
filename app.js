const card = '2342834503458353';

function secret(card) {
    if (card.length !== 16) {
        return console.log('Неверно введена карта')
    } else if (isNaN(Number(card)) === true) {
        return console.log('Неверно введена карта')
    } else {
        card.slice(0 , 12);
        return console.log(card.slice(12).padStart(12, '*'));
    }
}



secret(card);