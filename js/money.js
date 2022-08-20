// console.log('money.js');
function balance() {
    const incomField = document.getElementById('income');
    const incomFieldString = incomField.value;
    const income = parseFloat(incomFieldString);
    // console.log(income);
    const foodField = document.getElementById('food');
    const foodFieldString = foodField.value;
    const food = parseFloat(foodFieldString);
    const rentField = document.getElementById('rent');
    const rentFieldString = rentField.value;
    const rent = parseFloat(rentFieldString);
    const clothsField = document.getElementById('clothes');
    const clothsFieldString = clothsField.value;
    const clothse = parseFloat(clothsFieldString);
    const totalExpenses = food + rent + clothse;
    // console.log(totalExpenses)

    const expensField = document.getElementById('totalExpense');
    // const expensFieldString = expensField.innerText;
    expensField.innerText = totalExpenses;
    const balanceField = document.getElementById('balance');
    const balance = income - totalExpenses;
    balanceField.innerText = balance;
    return balance;
}
document.getElementById('calculate').addEventListener('click', function () {
    balance();
})

document.getElementById('saveBtn').addEventListener('click', function () {
    const incomField = document.getElementById('income');
    const incomFieldString = incomField.value;
    const income = parseFloat(incomFieldString);

    const saveField = document.getElementById('save');
    const saveFieldString = saveField.value;
    const save = parseFloat(saveFieldString);

    const savingAmount = income * save / 100;

    const savingField = document.getElementById('savingAmount');
    savingField.innerText = savingAmount;
    const remainingField = document.getElementById('remaningAmount');
    const Balance = balance();
    const remBalance = Balance - savingAmount;
    remainingField.innerText = remBalance;

})