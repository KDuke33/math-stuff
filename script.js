<<<<<<< HEAD
function subtraction(){
    let firstNumber = document.getElementById('number1').value;
    let secondNumber = document.getElementById('number2').value;
    let answer = document.getElementById('total');

    let totalAnswer = (firstNumber - secondNumber)
    answer.value = totalAnswer;
}

=======
addition = () =>{
    let fNumber = document.getElementById('firstNumber').value
    let sNumber = document.getElementById('secondNumber').value
    let sol = document.getElementById('solution')
    
    let first = parseFloat(fNumber)
    let second = parseFloat(sNumber)
    sol.value = first+second
    console.log(sol.value)
}
>>>>>>> 79933f83969b2d18ed266449742da82fca730c33
