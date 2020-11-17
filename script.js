console.log('Add validation!');


const form = document.querySelector('#parking-form')
const creditCardNum = document.querySelector('#credit-card')
const validDate = document.querySelector('#start-date')
const carYear = document.querySelector('#car-year')
const dateParking = document.querySelector('#start-date')
const expirationDate = document.querySelector('#expiration')

form.addEventListener('submit', function (event) {
    event.preventDefault
    calculateCost()
    validate()
    carValid()

})

//cost per day

function calculateCost() {
    let numberOFDays = document.querySelector('#days').value
    let result = eval(numberOFDays * 5)
    console.log(result)
    const display = document.querySelector('#total')
    display.innerHTML = result
}




//     const display = document.querySelector('#days-field')
//     display.innerHTML = event.target.innerHTML

// })

// function validate() {
//     let creditCardNum = document.querySelector('#credit-card').value 
//     validateCardNumber(creditCardNum)
//     if (validateCardNumber(creditCardNum.value)===false) {
//      creditCardNum.setCustomValidity("Invalid Card Number")

// }

//credit card

function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
        return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (i % 2 == 0) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
    }
    return (sum % 10) == 0;
}

creditCardNum.addEventListener("input", function (event) {
    if (validateCardNumber(creditCardNum.value) === false) {
        creditCardNum.setCustomValidity("Invalid Card Number")
    } else {
        creditCardNum.setCustomValidity('')
    }
})

// car year start

carYear.addEventListener("input", function (event) {

    let dateToday = new Date().getFullYear()
    let invalidYear = 1990
    if (carYear.value > dateToday || carYear.value < invalidYear) {
        carYear.setCustomValidity('invalid Car Year')
    } else {
        carYear.setCustomValidity('')
    }
})


// parking date start 

dateParking.addEventListener('change', function (event) {
    let today = new Date()
    let dateParking = new Date(dateParking.value)

    if (dateParking <= today) {
        dateParking.setCustomValidity('Invalid Date')
    } else {
        dateParking.setCustomValidity('')
    }


})

// Expiration date start

expirationDate.addEventListener('input', function (event) {
    let dateToday = new Date().getFullYear()

    if (expirationDate.value < dateToday) {
        expirationDate.setCustomValidity('invalid Expiration Date')
    } else {
        expirationDate.setCustomValidity('')
    }
})