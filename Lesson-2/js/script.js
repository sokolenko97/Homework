// Задача 0

// 1)

const taskNull = document.getElementById('task-0');
taskNull.addEventListener('click', runTaskNullFirst);

function runTaskNullFirst() {
    event.preventDefault();

    // Введення данних
    let a = parseInt(prompt(`Для розв'язання введіть значення 'a'`, '5'));
    let b = parseInt(prompt(`А також 'b'`, '5'));
    let c = parseInt(prompt(`Та 'c'`, '10'));
    
    // Обчислення
    const S1 = a + 12 + b;
    const S2 = Math.sqrt((a + b)/ (2 * a));
    const S3 = Math.cbrt((a + b) * c);
    const S4 = Math.sin(a / -b);

    // Вивод даних
    alert(`
    S1 = ${a} + 12 + ${b} = ${S1}
    S2 = √((${a} + ${b})/ (2 * ${a})) = ${S2}
    S3 = √'3(${a} + ${b})${c}) = ${S3}
    S4 = sin(${a} / -${b}) = ${S4}`);
}

// 2)


// Задача 1

// Сума

const taskOneSum = document.getElementById('task-1');
taskOneSum.addEventListener('click', runTaskOneSum);

function runTaskOneSum() {
    event.preventDefault();
    
    // Введення данних
    let firstNum = parseFloat(prompt(`Для розв'язання введіть перше число`, '15'));
    let secondNum = parseFloat(prompt(`А також друге число`, '6'));
    
    // Обчислення
    const SUM = firstNum + secondNum;
    const MULTIPLY = firstNum * secondNum;
    const DIVIDE = firstNum / secondNum;

    // Вивод даних

    document.write(`
    <head>
    <style>
        table{
            font-size: 20px;
        }
    </style>
    </head>
    <table border="1px">
        <tr>
            <th>Сума</th>
            <td>${firstNum} + ${secondNum} = </td>
            <th>${SUM}</th>
        </tr>
        <tr>
            <th>Добуток</th>
            <td>${firstNum} * ${secondNum} = </td>
            <th>${MULTIPLY}</th>
        </tr>
        <tr>
            <th>Частка</th>
            <td>${firstNum} / ${secondNum} = </td>
            <th>${DIVIDE}</th>
        </tr>
    </table>
    <br>
    <a href="./index.html">Назад</a>
    `)
}

// Задача 2 - рік народження

const taskTwo = document.getElementById('task-2');
taskTwo.addEventListener('click', runTaskTwo);

function runTaskTwo() {
    event.preventDefault();

    // Введення данних
    let birthYear = parseInt(prompt(`Введіть рік народження`, '2004'));
    const CURRENT_YEAR = 2024
    // Обчислення
    const AGE = CURRENT_YEAR - birthYear;

    // Вивод даних
    alert(`Вам ${AGE} років`);
}

// Задача 3

const taskThree = document.getElementById('task-3');
taskThree.addEventListener('click', runTaskThree);

function runTaskThree() {
    event.preventDefault();
    
    // Введення данних
    let price = parseFloat(prompt(`Введіть вартість одиниці товару`, '50.50'));
    let quantity = parseFloat(prompt(`Введіть кількість товару`, '5'));
    
    // Обчислення
    const VAT = price * quantity / 100 * 5; 
    const TOTAL = price * quantity + VAT;
    
    // Вивод даних
    console.log(`${quantity} шт по ${price} грн`);
    console.log(`Загальна вартість ${TOTAL} грн (${VAT} грн ПДВ)`);
    alert(`Загальна вартість ${TOTAL} грн (${VAT} грн ПДВ)`);
}


// Задача 4

const taskFour = document.getElementById('task-4');
taskFour.addEventListener('click', runTaskFour);

function runTaskFour() {
    event.preventDefault();
    
    // Введення данних
    let cm = parseInt(prompt(`Введіть довжину у сантиметрах`, '101000'));
    
    // Обчислення
    const KM = Math.floor(cm / 100000);    
    const M = cm % 100000 / 100;

    // Вивод даних
    alert(`Це ${KM} км та ${M} м`);
}

// Задача 5

const taskFive = document.getElementById('task-5');
taskFive.addEventListener('click', runTaskFive);

function runTaskFive() {
    event.preventDefault();
    
    // Введення данних
    let seconds = parseInt(prompt(`Введіть кількість секунд, що пройшла від початку доби`, '7376'));
    console.log(`${seconds} секунд`);

    // Обчислення
    const HOURS = Math.floor(seconds / 3600);
    const MINUTES = Math.floor(seconds % 3600 / 60);    

    // Вивод даних
    alert(`Це ${HOURS} годин(а) та ${MINUTES} хвилин(а)`);
}

// Задача 6

const taskSix = document.getElementById('task-6');
taskSix.addEventListener('click', runTaskSix);

function runTaskSix() {
    event.preventDefault();
    
    // Введення данних
    let firstItemPrice = parseFloat(prompt(`Введіть вартість мандарин`,'25.20'));
    let firstItemquantity = parseFloat(prompt(`Введіть вагу мандарин`,'3.5'));

    let secondItemPrice = parseFloat(prompt(`Введіть вартість одиниці товару`, '50.90'));
    let secondItemquantity = parseFloat(prompt(`Введіть кількість товару`, '1'));

    let thirdItemPrice = parseFloat(prompt(`Введіть вартість пакету`, '110.75'));
    let thirdItemquantity = parseFloat(prompt(`Введіть кількість пакетів`, '5'));

    // Обчислення

    const FIRST_ITEM_TOTAL = firstItemPrice * firstItemquantity;
    const SECOND_ITEM_TOTAL = secondItemPrice * secondItemquantity;
    const THIRD_ITEM_TOTAL = thirdItemPrice * thirdItemquantity;

    const ALL_ITEMS_TOTAL = FIRST_ITEM_TOTAL + SECOND_ITEM_TOTAL + THIRD_ITEM_TOTAL;

    // Вивод даних

    document.write(`
    <head>
    <style>
        table{
            margin: 0 auto;
            border: 1px solid black;
            font-size: 20px;
            padding: 20px;
        }
    </style>
    </head>

    <table class="check">
        <tr>
            <th colspan="3">Чек</th>
        </tr>
        <tr>
            <th>Товар</th>
            <th>Кількість</th>
            <th>Ціна</th>
        </tr>
        <tr>
            <td>Мандарини</td>
            <td>${firstItemquantity}x (${firstItemPrice}грн)</td>
            <td>${FIRST_ITEM_TOTAL}грн</td>
        </tr>
        <tr>
            <td>Вода</td>
            <td>${secondItemquantity}x (${secondItemPrice}грн)</td>
            <td>${SECOND_ITEM_TOTAL}грн</td>
        </tr>
        <tr>
            <td>Пакет</td>
            <td>${thirdItemquantity}x (${thirdItemPrice}грн)</td>
            <td>${THIRD_ITEM_TOTAL}грн</td>
        </tr>
        <tr>
            <th>СУМА</th>
            <td></td>
            <td>${ALL_ITEMS_TOTAL}грн</td>
        </tr>
        <a href="./index.html">Назад</a>
    </table>
    `)
}


// Задача 7

const taskSeven = document.getElementById('task-7');
taskSeven.addEventListener('click', runTaskSeven);

function runTaskSeven() {
    event.preventDefault();
    
    // Ввод даних

    let minMonths=1, maxMonths = 12, minDays = 0, maxDays = 6;

    // Обчислення

    const MONTHS = Math.floor(Math.random()*(maxMonths-minMonths+1));
    const DAYS = Math.floor(Math.random()*(maxDays-minDays+1));

    const SUM = DAYS + MONTHS;

    // Вивод даних

    alert(`${MONTHS} + ${DAYS} = ${SUM}`);
}