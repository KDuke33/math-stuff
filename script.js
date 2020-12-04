
const getDivision = () => {
    let firstnumD = document.getElementById('firstNumberD').value;
   let secNumD = document.getElementById('secondNumberD').value;
    let equalD = document.getElementById('equalD');
    let answerD = (firstnumD / secNumD)
    equalD.value = answerD;

  }

  let divisonButton = document.querySelector('.division');
  divisonButton.addEventListener('click', getDivision);

  const getMultiplication = () => {
     let firstnum = document.getElementById('firstNumber').value;
     let secNum = document.getElementById('secondNumber').value;
    let equal = document.getElementById('equal');
    let answer = (firstnum * secNum)
    equal.value = answer;
    
  }

function subtraction(){
    let firstNumber = document.getElementById('number1').value;
    let secondNumber = document.getElementById('number2').value;
    let answer = document.getElementById('total');

    let totalAnswer = (firstNumber - secondNumber)
    answer.value = totalAnswer;
}

addition = () =>{
    let fNumber = document.getElementById('firstNumber').value
    let sNumber = document.getElementById('secondNumber').value
    let sol = document.getElementById('solution')
    
    let first = parseFloat(fNumber)
    let second = parseFloat(sNumber)
    sol.value = first+second
    console.log(sol.value)
}

