// ============================================ ATM / InstaPay

// ====================== Selectors
const instaPay = document.querySelector('.instaPay');
const tableOfInstaPay = document.querySelector('table tbody');
const span = document.querySelector('.instaPay h1 span');
const input = document.querySelector('.instaPay input');
const showBalanceBtn = document.querySelector('#showBalanceBtn');
const history = [];
let balance = 0;
// ====================== Functions

let showBalance = () => {
    span.innerText = balance;
    showBalanceBtn.classList.add('d-none');
};

let withdraw = () => {
    let amount = +input.value;
    let newTransactions = {
        beforeBalance: balance,
        amount: amount,
        afterBalance: balance - amount,
        type: 'withdraw'
    };
    history.push(newTransactions);
    if (amount <= balance) {
        balance -= amount;
        showBalance();
        showHistory();
        input.value = '';
    } else {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'أنت فقير يالا',
        })
    }
};
let deposit = () => {
    let amount = +input.value;
    let newTransactions = {
        beforeBalance: balance,
        amount: amount,
        afterBalance: balance + amount,
        type: 'deposit'
    };
    history.push(newTransactions);
    balance += amount;
    showBalance();
    showHistory();
    input.value = '';
};

let showHistory = () => {
    instaPay.classList.remove('vh-100');
    tableOfInstaPay.innerHTML = '';
    history.forEach((el, index) => {
        let row = `
        <tr>
            <th>${index + 1}</th>
            <th>${el.beforeBalance}</th>
            <th>${el.amount}</th>
            <th>${el.type}</th>
            <th>${el.afterBalance}</th>
        </tr>`
        tableOfInstaPay.innerHTML += row;
    });
};