let myButton = document.getElementById("calculation");//Присваиваем кнопке имя
let wrong = document.getElementById("wrongdata");//Присваиваем имя полю с ошибкой, которое пока скрыто
let start = {}; //Даем ссылку на данные для переменной 
let payment = +document.getElementById("addition").value; //Даем ссылку на данные для переменной
let rate = +document.getElementById("percent").value;     //Даем ссылку на данные для переменной
let term = +document.getElementById("term").value;
myButton.addEventListener("click", checkValues);
//Запускаем кнопку и вызываем ею функцию

function initialize() {
    start = +document.getElementById("startvalue").value; //Даем ссылку на данные для переменной 
    payment = +document.getElementById("addition").value; //Даем ссылку на данные для переменной
    rate = +document.getElementById("percent").value;     //Даем ссылку на данные для переменной
    term = +document.getElementById("term").value;
}

function checkValues() {
    initialize();
    
    wrong.className = "nonmistake"; // указываем автоневидмость полю с ошибкой
    if (start <= 0) {
        console.log("Ошибка- Начальная сумма должна быть больше нуля.");
        wrong.className = "mistake";
        return NaN;
    } else if (rate <= 0) {
        console.log("Ошибка- Процентная ставка должна быть больше нуля и не более 100%.");
        wrong.className = "mistake";
        return NaN;
    } else if (term <= 0) {
        console.log("Ошибка- Срок вклада должен быть больше нуля.");
        wrong.className = "mistake";
        return NaN;
    } else if (payment < 0) {
        console.log("Ошибка- Сумма допвзноса должна быть больше нуля.");
        wrong.className = "mistake";
        return NaN;
    } else {
        console.log(calculateDeposit());
    }

};


function calculateDeposit() {
    
    wrong.className = "nonmistake";

    //Подсчеты по первому месяцу:  
    if ((rate <= 100) && ((Math.floor(term / 30)) <= 30) && (Number.isInteger(term))) {
        start *= (1 + rate / 100 / 12);
        console.log(start);


        //Подсчеты по последующим месяцам:
    } else if ((rate <= 100) && (term > 30) && (Number.isInteger(term))) {
        let trueterm = Math.floor(term / 30);
        for (let i = 0; i < trueterm; i++) {
            start += payment;//Добавляем допвзнос
            start *= (1 + rate / 100 / 12);
        }
        console.log(start);

    } else {             //если İF не выполнился

        wrong.className = "mistake";
    }

    return start;
};

// Основная программа

//checkValues(myStart, myPayment, myRate, myTerm);
