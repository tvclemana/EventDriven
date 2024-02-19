/* const number = 11

const paragraph = document.getElementById('paragraph')

if(number % 2 === 1){
    paragraph.innerHTML = "odd"
} else {
    paragraph.innerHTML = "even"
} */

/* const hours = 11

if (hours < 12){
    paragraph.innerHTML = "Good morning"
} else if (hours < 18){
    paragraph.innerHTML = "good afternoon"
} else {
    paragraph.innerHTML = "good evening"
} */

/* switch (new Date().getDay()){
    case 6:
        text = "Today is saturday"
    case 0:
        text = "Today is sunday"
    
} */

/* const span = document.getElementById("highest-number")

function HighestBetweenTwoNumbers(num1, num2){
    if (num1>num2){
        span.innerHTML = num1
    }else if (num1 < num2){
        span.innerHTML = num2
    }
    else{
        span.innerHTML = "They are equal"
    }
}

function HighestBetweenThreeNumbers(num1,num2,num3){
    if(num1 > num2 && num1 > num3){
        span.innerHTML = num1
    } else if (num2 > num1 && num2 >num3) {
        span.innerHTML = num2
    } else if (num3 > num2 && num3 > num1){
        span.innerHTML = num3
    } else {
        span.innerHTML = "numbers are equal"
    }
}


const numbers = [1,2,3,4,500]

function highestNumber (numbers){
    let highestNum = null
/* 
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] > highestNum){
            highestNum = numbers[i]
        }
    } */

/*     for (let number of numbers){
        if (number > highestNum){
            highestNum = number
    }
    span.innerHTML = highestNum
}
}
highestNumber(numbers) */ 

const answer = document.getElementById('answer')

function myFunction() {

    let operation = prompt("Please select a operation: (1) Addition,(2) Subtraction,(3) Multiplication,(4)Division");
    let firstNum;
    let secondNum;
    let equals;
    
    if (operation === null){
        answer.innerHTML = "You pressed Cancel."
        return;
    }

    switch(operation){
        case"1":
            firstNum = prompt("Select first number: ")
            secondNum = prompt("Select second number: ")
            firstNum = parseInt(firstNum)
            secondNum = parseInt(secondNum)

            equals = firstNum + secondNum
            answer.innerHTML = firstNum + " plus " + secondNum + " is " + equals
            break;

        case "2":
            firstNum = prompt("Select first number: ")
            secondNum = prompt("Select second number: ")
            firstNum = parseInt(firstNum)
            secondNum = parseInt(secondNum)

            equals = firstNum - secondNum
            answer.innerHTML = firstNum + " minus " + secondNum + " is " + equals
            break;

        case "3":
            firstNum = prompt("Select first number: ")
            secondNum = prompt("Select second number: ")
            firstNum = parseInt(firstNum)
            secondNum = parseInt(secondNum)
    
            equals = firstNum * secondNum
            answer.innerHTML = firstNum + " times " + secondNum + " is " + equals
            break;
            
        case "4":
            firstNum = prompt("Select first number: ")
            secondNum = prompt("Select second number: ")
            firstNum = parseInt(firstNum)
            secondNum = parseInt(secondNum)
            equals = firstNum / secondNum
            let remainder = firstNum % secondNum
            answer.innerHTML = firstNum + " divided by " + secondNum + " is " + equals + " remainder " + remainder
            break;       
        default:
            answer.innerHTML = "Invalid Operation."



    }
    
  }

  myFunction()