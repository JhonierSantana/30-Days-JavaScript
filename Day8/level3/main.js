// Exercise 1
const personAccount = {
    firstName: 'John',
    lastName: 'Doe',
    incomes: [],
    expenses: [],
    totalIncome: function() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    totalExpense: function() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    accountInfo: function() {
      return `Name: ${this.firstName} ${this.lastName}, Total Income: $${this.totalIncome()}, Total Expense: $${this.totalExpense()}`;
    },
    addIncome: function(description, amount) {
      this.incomes.push({ description, amount });
    },
    addExpense: function(description, amount) {
      this.expenses.push({ description, amount });
    },
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  // Exercise 2
  function signUp(newUser) {
    const existingUser = users.find(user => user.email === newUser.email);
    if (existingUser) {
      console.log('User already exists');
    } else {
      users.push(newUser);
      console.log('User registered successfully');
    }
  }
  
  // Exercise 3
  function signIn(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      user.isLoggedIn = true;
      console.log('User signed in successfully');
    } else {
      console.log('Invalid credentials');
    }
  }
  
  // Exercise 4a
  function rateProduct(productId, userId, rating) {
    const product = products.find(product => product._id === productId);
    if (product) {
      product.ratings.push({ userId, rate: rating });
      console.log('Product rated successfully');
    } else {
      console.log('Product not found');
    }
  }
  
  // Exercise 4b
  function averageRating(productId) {
    const product = products.find(product => product._id === productId);
    if (product) {
      const totalRatings = product.ratings.length;
      if (totalRatings === 0) {
        return 0;
      }
      const totalRating = product.ratings.reduce((sum, rating) => sum + rating.rate, 0);
      return totalRating / totalRatings;
    } else {
      return 'Product not found';
    }
  }
  
  // Exercise 5
  function likeProduct(productId, userId) {
    const product = products.find(product => product._id === productId);
    if (product) {
      const userLiked = product.likes.includes(userId);
      if (userLiked) {
        product.likes = product.likes.filter(like => like !== userId);
        console.log('Product unliked');
      } else {
        product.likes.push(userId);
        console.log('Product liked');
      }
    } else {
      console.log('Product not found');
    }
  }
  
  // Example usage
  signUp({
    _id: 'xyz123',
    username: 'Jane',
    email: 'jane@example.com',
    password: 'password123',
    createdAt: '08/01/2021 2:30 PM',
    isLoggedIn: false
  });
  
  signIn('jane@example.com', 'password123');
  
  rateProduct('aegfal', 'xyz123', 4);
  console.log('Average Rating:', averageRating('aegfal'));
  
  likeProduct('aegfal', 'xyz123');
  