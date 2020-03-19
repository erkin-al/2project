let myButton = document.getElementById("calculation");//Присваиваем кнопке имя
let wrong = document.getElementById("wrongdata");//Присваиваем ошибке имя

myButton.addEventListener("click", check);//Запускаем кнопку и ниже функция:

function check(start, payment, rate, term) {
    start = +document.getElementById("startvalue").value; //Даем ссылку на данные для переменной 
    payment = +document.getElementById("addition").value; //Даем ссылку на данные для переменной
    rate = +document.getElementById("percent").value;     //Даем ссылку на данные для переменной
    term = +document.getElementById("term").value;        //Даем ссылку на данные для переменной     

    // Подсчет по первому месяцу, не учитываем в нем дополнительные взнос, он будет только начиная со второго месяца
    if ((start > 0) && (payment >= 0) && (rate > 0) && (rate <= 100) && (term > 0) && (term <= 30) && (Number.isInteger(term))) {
        let trueterm = Math.floor(term / 30); //указываем, что подсчеты должны быть по полным месяцам, неполная часть месяца не учитывается
        for (let i = 0; i < trueterm; i++) //Циклуем
        {
            start *= (1 + rate / 100 / 12);
        }
        console.log(start);
        return start;
        //Подсчеты по последующим месяцам
    } else if ((start > 0) && (payment >= 0) && (rate > 0) && (rate <= 100) && (term > 30) && (Number.isInteger(term))) {
        let trueterm = Math.floor(term / 30);

        for (let i = 0; i < trueterm; i++) {
            start += payment;//Добавляем допвзнос
            start *= (1 + rate / 100 / 12);
        }
        console.log(start);
        return start;

    } else {             //если İF не выполнился

        wrong.className = "mistake";
    }



}