console.log('Add validation!');


const form = document.querySelector('#parking-form')

form.addEventListener('submit', function (event) {
    event.preventDefault
    calculateCost()
    validate()
    
})

function calculateCost() {
    let numberOFDays = document.querySelector('#days').value
    let result = eval(numberOFDays * 5)
    console.log(result)
    const display = document.querySelector('#total')
    display.innerHTML = result
}

// const months = [
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August',
//     'September',
//     'October',
//     'November',
//     'December'
//   ]

// const days = [
//     'Sun',
//     'Mon',
//     'Tue',
//     'Wed',
//     'Thu',
//     'Fri',
//     'Sat'
//   ]
    
    
    
//     const display = document.querySelector('#days-field')
//     display.innerHTML = event.target.innerHTML

// })

function validate() {
    let creditCardNum = document.querySelector('#credit-card').value 
    validateCardNumber(creditCardNum)
    
}


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

