

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

let numberofpeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    const bill = Number(billInput.value)
    const tipPercent = Number(tipInput.value)/100

    const tipAmount = bill * tipPercent

    const total = tipAmount + bill
    const perPersonTotal = total/numberofpeople

    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}` 
}

const increasePeople = () =>{
    numberofpeople += 1
    numberOfPeopleDiv.innerText = numberofpeople

    calculateBill()
}

const decreasePeople = () => {

    if(numberofpeople <= 1){
        throw "Sorry,you cannot have person count less than one."
        // alert("Sorry,you cannot have less than one person")
        return 
    }
    numberofpeople -= 1
    numberOfPeopleDiv.innerText = numberofpeople

    calculateBill()
}