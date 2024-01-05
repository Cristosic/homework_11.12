// Уровень 2

// 1. Продолжить функцию zoom() на экране у нас есть изображение размером w = 200, h = 200. при каждом клике изображения увеличивайте
//    его размер на 50 (w+ = 50, h + = 50). Если в результате очередного клика размер изображения превышает 500, то во время всех
//    последующих кликов уменьшайте размер изображения на 50.:


let image = document.querySelector(".gallery__image"), isToggle = true, w = 200, h = 200;

function zoom() {
  if (isToggle && (w <= 500 && h <= 500)) {
    w += 50;
    h += 50;
  } else if (!isToggle && (w > 200 && h > 200)) {
        w -= 50;
        h -= 50;
} else {
      isToggle = !isToggle;

  }
  image.style.width = w + 'px';
  image.style.height = h + 'px';
}



// ЗАДАЧА 2

// Задача состоит в создании формы выбора курсов для студента, где студент может выбрать различные модули: Frontend, Backend и Design,
// а затем выбрать конкретные курсы из каждого модуля. Каждый курс имеет свою стоимость. Студент также должен указать количество приобретаемых курсов.

// После выбора курсов и указания количества, при нажатии кнопки должна отобразиться общая стоимость выбранных курсов.
// Если общая стоимость превышает $3000, студенту предоставляется 30% скидка, и должна отобразиться окончательная сумма со скидкой.

// Например, если студент выбрал курсы JavaScript, PHP и Photoshop, каждый со своей стоимостью, и указал количество 12,
// то должна быть рассчитана общая стоимость (сумма стоимостей каждого выбранного курса, умноженная на количество) и отображена на экране.
// Если общая стоимость превышает $3000, то должна быть применена скидка в размере 30%, и должна быть показана окончательная сумма со скидкой.

// Например, сообщение на экране может быть: "Уважаемый студент, вы должны заплатить $5400". Если общая стоимость превышает $3000,
// то сообщение может быть: "Уважаемый студент, вы должны заплатить $5400, но вы получаете 30% скидку, и окончательная сумма составляет $3780".



function sum() {
  let input1 = +document.querySelector('.input-1').value;
  let input2 = +document.querySelector(".input-2").value;
  let input3 = +document.querySelector(".input-3").value;

  let course1 = +document.querySelector(".courseFrontend").value;
  let course2 = +document.querySelector(".courseBackend").value;
  let course3 = +document.querySelector(".courseWebDesign").value;

  let totalSum = (course1 * input1) + (course2 * input2) + (course3 * input3); 



  if (totalSum > 3000) {
    let totalSumWithDiscount = totalSum - (totalSum * 0.3);
    document.querySelector(".totalPrice").innerHTML = `Your total is ${totalSum}$ but you get a 30% discount and your total is ${totalSumWithDiscount}$`;
  }else {
      document.querySelector(".totalPrice").innerHTML = `Your total is $${totalSum}$`;
  }
}


// Написать программу, которая перебирает все комбинации целых чисел i, j и k в диапазоне от 1 до 99 и проверяет, являются ли они сторонами прямоугольного треугольника по теореме Пифагора. Если i, j и k удовлетворяют теореме Пифагора (j * j + i * i === k * k), то программа выводит их значения.

for (let i = 1; i < 99; i++) {
  for (let j = 1; j < 99; j++) {
    for (let k = 1; k < 99; k++) {
      if (j * j + i * i === k * k) {
        console.log(`${i},${j},${k}`);
       }
      }
    }
  }
  