document.write('Hello, world!');
console.log('Hello, developers!');

while (true) {
// Задание 1
    let meanNumber = Math.floor(Math.random() * 1000);
    console.log(meanNumber);
    // Опрашиваем пользователя

    // Валидация. Без цикла
    // let userNumber = window.prompt();
    // console.log(userNumber);

    // Валидация. 
    let userNumber

    do {
        userNumber = window.prompt("Загадайте число ;)");
    }
    while (isNaN(userNumber) || userNumber === "" ) 
    
    // Нашел что кнопка отмены возвращает null. не понял почему isNaN пропускает null
    if (userNumber === null) {
        break;
    }
    console.log(userNumber);
    // Сравниваем
    if (userNumber == meanNumber) {
        alert("Вы угадали :) ")
    } else {
        alert("Вы не угадали")
    }
}
