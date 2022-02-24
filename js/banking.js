// deposit system
document.getElementById('depositButton').addEventListener('click', function() {
    const inputOfDeposit = document.getElementById('depositInput');
    const inputAmount = inputOfDeposit.value;
    // update deposit field
    const previousDepositAmount = document.getElementById('total-deposit').innerText;
    const depositTotal = parseFloat(previousDepositAmount) + parseFloat(inputAmount);
    const totalDepositAmount = document.getElementById('total-deposit');
    totalDepositAmount.innerText = depositTotal;
    // update balance
    const balanceAmount = document.getElementById('total-balance');
    const previousTotalBalance = balanceAmount.innerText;
    const totalBalance = parseFloat(previousTotalBalance) + parseFloat(inputAmount);
    balanceAmount.innerText = totalBalance;
    // clear the deposit input field
    inputOfDeposit.value = '';
});

// withdraw system
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputValue = document.getElementById('withdraw-input').value;
    // update withdraw
    const previousWithdraw = document.getElementById('total-withdraw').innerText;
    const totalWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawInputValue);
    const totalWithdrawAmount = document.getElementById('total-withdraw');
    totalWithdrawAmount.innerText = totalWithdraw;
    // update balance 
    const previousWithdrawAmount = document.getElementById('total-balance').innerText;
    const lastTotalBalance = parseFloat(previousWithdrawAmount) - parseFloat(withdrawInputValue);
    document.getElementById('total-balance').innerText = lastTotalBalance;
    // clear the withdraw input field
    document.getElementById('withdraw-input').value = '';
})