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