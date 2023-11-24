/*
    Есть выгрузка операций пользователя
    const operations = [1000, -700, 300, -500, 10000];
    а так же начальный баланс в 100$
    Необходимо сделать функции расчета:
    - Итогового баланса
    - Наличия отрицательного баланса (если после очередной операции
        баласн < 0, то выдавать fals)
    - Расчета среднего расхода и среднего дохода
 */
const operations = [1000, -700, 300, -500, 10000];

function sum() {
    let sumop = 100;
    for (let i = 0; i < operations.length; i++) {
        sumop += operations[i];
    }
    return console.log(sumop)
}
sum()

function balance() {
    let sumop = 100;
    for (let i = 0; i < operations.length; i++) {
        sumop += operations[i];
        if (sumop < 0) {
            return console.log(false);
        }
    }
    return console.log('Отрицательного баланса не было')
}
balance()