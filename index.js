// //vareible declaration

// var age;

// //varieble assignment

// age = 28

// //varieble initialization

// var dateOfBirth = 2023

// var firstname = 2023

// var firstName ="daniel"
// var lastName ="okeowo"
// var emailAddress ="okeworld78@gmail.com"
// var accountBalance =null
// var phoneNumber =9115880821
// var maritalStatus = false
// var codingProgress =undefined

// console.log(firstName)
// console.log(lastName)
// console.log(emailAddress)
// console.log(phoneNumber)
// console.log(codingProgress)
// console.log(maritalStatus)
// console.log(accountBalance)

function profitcalculator(cp, sp) {
    var profit = sp - cp
    return profit

}
profitcalculator(50000, 120000)

console.log(profitcalculator(50000, 120000))

function areaOfSqare(length) {
    var area = length * length
    return area


}
areaOfSqare(10)

console.log(areaOfSqare(10))

function perimeterOfACircle(pie, r) {
    var perimeter = 2 * pie * r
    return perimeter
}

console.log(perimeterOfACircle(3, 14, 20))

// function percentageProfit(cp,sp){
//     var percentage = pp/cp*100
//     return percentage
// }

// console.log(percentageProfit(50000,120000))

function percentageProfit(cp, sp) {
    var profit = sp - cp
    var percentageProfit = (profit / cp) * 100
    return percentageProfit
}
percentageProfit(20000, 50000)
console.log(percentageProfit(20000, 50000))

function sellTicket(age) {
    if (age < 18) {
        console.log('buy tickets for 50% discount')
    }
    else {
        console.log('buy ticket for 1% proice')
    }

}
sellTicket(16)
sellTicket(24)

var banjiAge =18
var danielAge

 danielAge = banjiAge