function personAccount(firstName, lastName) {
    let incomes = [];
    let expenses = [];

    function addIncome(description, amount) {
        incomes.push({ description, amount });
    }

    function addExpense(description, amount) {
        expenses.push({ description, amount });
    }

    function totalIncome() {
        return incomes.reduce((total, income) => total + income.amount, 0);
    }

    function totalExpense() {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    function accountInfo() {
        console.log(`Account Information for ${firstName} ${lastName}`);
        console.log("Incomes:", incomes);
        console.log("Expenses:", expenses);
    }

    function accountBalance() {
        const balance = totalIncome() - totalExpense();
        console.log(`Account Balance for ${firstName} ${lastName}: ${balance}`);
        return balance;
    }

    return {
        addIncome,
        addExpense,
        totalIncome,
        totalExpense,
        accountInfo,
        accountBalance
    };
}

const johnDoeAccount = personAccount("John", "Doe");
johnDoeAccount.addIncome("Salary", 3000);
johnDoeAccount.addExpense("Rent", 1000);
johnDoeAccount.addExpense("Groceries", 200);
johnDoeAccount.accountInfo();
johnDoeAccount.accountBalance();
