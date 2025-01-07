document
  .getElementById("calcForm")
  .addEventListener("submit", function (event) {
    event.preventDefault() // Запобігає перезавантаженню сторінки

    // Отримуємо введене число
    const inputNumber = parseFloat(document.getElementById("inputNumber").value)

    // Отримуємо значення з нових полів вводу
    const input1 = parseFloat(document.getElementById("input1").value)
    const input2 = parseFloat(document.getElementById("input2").value)

    if (isNaN(inputNumber) || inputNumber <= 0) {
      alert("Будь ласка, введіть коректне число для основного числа.")
      return
    }

    if (isNaN(input1) || isNaN(input2)) {
      alert("Будь ласка, введіть коректні значення для перших двох полів.")
      return
    }

    // Віднімаємо 6500 від основного числа
    const remaining = inputNumber - 6500

    // Обчислюємо 65% та 35% від основного числа
    const yaValueFromNumber = 0
    const taValueFromNumber = remaining * 0.35 + 3250

    // Обчислюємо 35% від першого поля та додаємо до ta
    const taValueFromInput1 = input1 * 0.35

    // Обчислюємо 65% від другого поля та додаємо до ya
    const yaValueFromInput2 = input2 * 0.65

    // Створюємо об'єкти ya та ta
    const ya = { value: yaValueFromNumber + yaValueFromInput2 }
    const ta = { value: taValueFromNumber + taValueFromInput1 }

    // Виводимо результати у поля вводу
    document.getElementById("ya").value = ya.value.toFixed(2)
    document.getElementById("ta").value = ta.value.toFixed(2)

    // Розраховуємо різницю та виводимо результат
    const resultElement = document.getElementById("result")
    const difference = Math.abs(ya.value - ta.value)

    if (difference === 0 || difference > -1 && difference < 1) {
      resultElement.innerHTML = "<p>Вав ніхто нікому нічо не винен 🤝</p>"
    } else {
      if (ya.value > ta.value) {
        resultElement.innerHTML = `<p>Різницю в сумі ${difference.toFixed(0)} грн має оплатити Ярик 😎💋</p>`
      } else {
        resultElement.innerHTML = `<p>Різницю в сумі ${difference.toFixed(0)} грн має оплатити Танюшка 😎😘</p>`
      }
    }
  })
