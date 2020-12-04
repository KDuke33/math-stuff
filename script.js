addition = () =>{
    let fNumber = document.getElementById('firstNumber').value
    let sNumber = document.getElementById('secondNumber').value
    let sol = document.getElementById('solution')
    
    let first = parseFloat(fNumber)
    let second = parseFloat(sNumber)
    sol.value = first+second
    console.log(sol.value)
}