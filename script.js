function subtraction(){
    let firstNumber = document.getElementById('number1').value;
    let secondNumber = document.getElementById('number2').value;
    let answer = document.getElementById('total');

    let totalAnswer = (firstNumber - secondNumber)
    answer.value = totalAnswer;
}

