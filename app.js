let balance = 100;
let bonusBalance = 900;
const isBanned = false;
const isExist = false;
const isSelling = true;

if (Number(balance) > 1000 || Number(bonusBalance) > 100 && isBanned === false && isExist === false && isSelling === true) {
    console.log('Польтзователь может купить игру !!!');
} else {
    console.log('Пользователь не может купить игру !!!');
}

const canBuy = (balance > 1000 || bonusBalance > 100)
    && !isBanned
    && !isExist
    && isSelling;
console.log(`Могу купить игру: ${canBuy ? 'Да' : 'нет'}`);