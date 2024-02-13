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

const demo = document.getElementById('demo')

function myFunction() {
    let operation = prompt("Please select a operation: (1) Addition,(2) Subtraction,(3) Multiplication,(4)Division");
    if (operation = 1) {
        let addFirst = prompt("Please give me your first number:")
        let addSecond = prompt ("Please give me your second number:")
        
    }
    demo.innerHTML = "Your sum is: ", addFirst + addSecond
  }

  myFunction()