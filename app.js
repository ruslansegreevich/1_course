/*
    Дан прпоизвольный url -
    'https://purpleschool.ru/course/javascript'
    Нужно сделать функцию, которая выводит в консоль:
    - Протокол (https)
    - Доменное имя (purpleschool.ru)
    - Путь внутри сайта (/course/javascript)
 */

const url = 'https://purpleschool.ru/course/javascript';

function result(url) {
    const resurl = url.split('/');
    const [protocol, _, domen, saite, saite1] = resurl;
    if (protocol === 'https:' || protocol === 'http:') {
console.log(`Протокол: ${protocol.slice(0, -1)} 
Доменное имя: ${domen}
Путь внутри сайта: /${saite}/${saite1}`);
    } else {
        return console.log('Не верно указан URL !!!');
    }
}
result(url);