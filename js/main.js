let screen = document.getElementById('screen')
let btnNumOp = document.querySelectorAll('.btn')
let btnEqual = document.getElementById('equal')
let btnClear = document.getElementById('clear')
let clear = 0
btnNumOp.forEach(function (ele) {
  ele.onclick = function () {
    if (clear > 0) {
      screen.innerHTML = ''
      clear = 0
    }
    screen.innerHTML += ele.innerHTML
  }
})

btnClear.onclick = function () {
  screen.innerHTML = ''
}

btnEqual.onclick = function () {
  // To determine when must translate
  let state = false
  // Numbers and result
  let num1 = ''
  let num2 = ''
  let result = 0
  // To take the content of screen
  let str = screen.textContent
  // To count number of operators
  let opCount = 0
  // To check if number negative
  let i = 0
  let negOp = false
  if (str[0] == '-') {
    negOp = true
    i++
  }
  // To make array
  let arr = str.split('')
  // To check number of operators
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '+' || arr[i] === '-' || arr[i] === '*' || arr[i] === '/') {
      if (i == 0 && arr[i] == '-') {
        continue
      }
      opCount++
    }
  }
  if (opCount == 1) {
    for (; i < arr.length; i++) {
      if (
        arr[i] !== '+' &&
        arr[i] !== '-' &&
        arr[i] !== '*' &&
        arr[i] !== '/' &&
        state == false
      ) {
        num1 += arr[i]
      } else if (state == false) {
        op = arr[i]
        state = true
      } else {
        num2 += arr[i]
      }
    }
    num1 = Number(num1)
    if (negOp == true) {
      num1 = -num1
    }
    num2 = Number(num2)
    switch (op) {
      case '+':
        result = num1 + num2
        break
      case '-':
        result = num1 - num2
        break
      case '*':
        result = num1 * num2
        break
      case '/':
        result = num1 / num2
    }
    screen.innerHTML = result
  } else {
    screen.innerHTML = 'Error'
  }
  clear++
}
