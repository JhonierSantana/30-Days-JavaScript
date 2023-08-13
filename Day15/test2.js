class Statistics {
    constructor(data) {
      this.data = data;
    }
  
    count() {
      return this.data.length;
    }
  
    sum() {
      return this.data.reduce((acc, val) => acc + val, 0);
    }
  
    min() {
      return Math.min(...this.data);
    }
  
    max() {
      return Math.max(...this.data);
    }
  
    range() {
      return this.max() - this.min();
    }
  
    mean() {
      return this.sum() / this.count();
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    mode() {
      const frequency = {};
      this.data.forEach((val) => {
        frequency[val] = (frequency[val] || 0) + 1;
      });
  
      let maxFrequency = 0;
      let mode = null;
      for (const key in frequency) {
        if (frequency[key] > maxFrequency) {
          maxFrequency = frequency[key];
          mode = key;
        }
      }
  
      return { mode: parseInt(mode), count: maxFrequency };
    }
  
    var() {
      const mean = this.mean();
      const squaredDiffs = this.data.map((val) => (val - mean) ** 2);
      return this.sumArray(squaredDiffs) / this.count();
    }
  
    std() {
      return Math.sqrt(this.var());
    }
  
    freqDist() {
      const frequency = {};
      this.data.forEach((val) => {
        frequency[val] = (frequency[val] || 0) + 1;
      });
  
      const freqDistArray = Object.entries(frequency)
        .map(([value, count]) => [count, parseInt(value)])
        .sort((a, b) => b[0] - a[0]);
  
      return freqDistArray;
    }
  
    sumArray(arr) {
      return arr.reduce((acc, val) => acc + val, 0);
    }
  
    describe() {
      return {
        Count: this.count(),
        Sum: this.sum(),
        Min: this.min(),
        Max: this.max(),
        Range: this.range(),
        Mean: this.mean(),
        Median: this.median(),
        Mode: this.mode(),
        Variance: this.var(),
        'Standard Deviation': this.std(),
        'Frequency Distribution': this.freqDist(),
      };
    }
  }
  



  
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = new Statistics(ages);
  
  console.log('Count:', statistics.count());
  console.log('Sum: ', statistics.sum());
  console.log('Min: ', statistics.min());
  console.log('Max: ', statistics.max());
  console.log('Range: ', statistics.range());
  console.log('Mean: ', statistics.mean());
  console.log('Median: ', statistics.median());
  console.log('Mode: ', statistics.mode());
  console.log('Variance: ', statistics.var());
  console.log('Standard Deviation: ', statistics.std());
  console.log('Frequency Distribution: ', statistics.freqDist());
  console.log(statistics.describe());
  

  class PersonAccount {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.incomes = [];
      this.expenses = [];
    }
  
    addIncome(description, amount) {
      this.incomes.push({ description, amount });
    }
  
    addExpense(description, amount) {
      this.expenses.push({ description, amount });
    }
  
    totalIncome() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    }
  
    totalExpense() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
  
    accountInfo() {
      return {
        FirstName: this.firstName,
        LastName: this.lastName,
        TotalIncome: this.totalIncome(),
        TotalExpense: this.totalExpense(),
      };
    }
  
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  }
  
  const personAccount = new PersonAccount('John', 'Doe');
  personAccount.addIncome('Salary', 3000);
  personAccount.addIncome('Bonus', 1000);
  personAccount.addExpense('Rent', 1200);
  personAccount.addExpense('Groceries', 500);
  
  console.log(personAccount.accountInfo());
  console.log('Account Balance: ', personAccount.accountBalance());
  