const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
  
  // Find the person who has many skills
  let mostSkilledPerson = '';
  let maxSkills = 0;
  
  for (const user in users) {
    if (users[user].skills.length > maxSkills) {
      maxSkills = users[user].skills.length;
      mostSkilledPerson = user;
    }
  }
  
  console.log('Most Skilled Person:', mostSkilledPerson);
  
  // Count logged in users and users with points >= 50
  let loggedInCount = 0;
  let highPointsCount = 0;
  
  for (const user in users) {
    if (users[user].isLoggedIn) {
      loggedInCount++;
    }
    if (users[user].points >= 50) {
      highPointsCount++;
    }
  }
  
  console.log('Logged In Users:', loggedInCount);
  console.log('Users with >= 50 Points:', highPointsCount);
  
  // Find MERN stack developers
  const mernDevelopers = [];
  
  for (const user in users) {
    if (
      users[user].skills.includes('MongoDB') &&
      users[user].skills.includes('Express') &&
      users[user].skills.includes('React') &&
      users[user].skills.includes('Node')
    ) {
      mernDevelopers.push(user);
    }
  }
  
  console.log('MERN Stack Developers:', mernDevelopers);
  
  // Set your name in the users object
  const myName = 'Your Name';
  users[myName] = {
    email: 'your@email.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 25,
    isLoggedIn: true,
    points: 100
  };
  
  console.log(users);
  
  // Get all keys/properties of users object
  const userKeys = Object.keys(users);
  console.log('User Keys:', userKeys);
  
  // Get all values of users object
  const userValues = Object.values(users);
  console.log('User Values:', userValues);
  
  // Use the countries object to print country information
  const countries = {
    Afghanistan: {
      capital: 'Kabul',
      population: 27657145,
      languages: ['Pashto', 'Uzbek', 'Turkmen']
    },
    Armenia: {
      capital: 'Yerevan',
      population: 2994400,
      languages: ['Armenian', 'Russian']
    },
    Australia: {
      capital: 'Canberra',
      population: 24117360,
      languages: ['English']
    },
    Bangladesh: {
      capital: 'Dhaka',
      population: 168957745,
      languages: ['Bengali']
    }
  };
  
  for (const country in countries) {
    const { capital, population, languages } = countries[country];
    console.log(`Country: ${country}, Capital: ${capital}, Population: ${population}, Languages: ${languages.join(', ')}`);
  }
  