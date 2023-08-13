const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

const incomePattern = /\d+/g;
const matches = text.match(incomePattern);

let totalIncome = 0;
if (matches) {
  matches.forEach((match) => {
    totalIncome += parseInt(match);
  });
}

console.log(totalIncome); 

const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoints = points.map(Number).sort((a, b) => a - b);

const distance = Math.abs(sortedPoints[0] - sortedPoints[sortedPoints.length - 1]);
console.log(distance); // Output: 12

function is_valid_variable(variable) {
    const variablePattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    return variablePattern.test(variable);
  }
  
  console.log(is_valid_variable('first_name')); // Output: true
  console.log(is_valid_variable('first-name')); // Output: false
  console.log(is_valid_variable('1first_name')); // Output: false
  console.log(is_valid_variable('firstname')); // Output: true
  

  function tenMostFrequentWords(paragraph, limit = 10) {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);
    const wordFrequency = {};
  
    words.forEach((word) => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
  
    const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
  
    return sortedWords.slice(0, limit).map(([word, count]) => ({ word, count }));
  }
  
  const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;
  
  console.log(tenMostFrequentWords(paragraph));
  

  function cleanText(text) {
    return text.replace(/[^a-zA-Z\s]/g, '');
  }
  
  function mostFrequentWords(text, limit = 3) {
    const cleanedText = cleanText(text);
    const words = cleanedText.toLowerCase().match(/\b\w+\b/g);
    const wordFrequency = {};
  
    words.forEach((word) => {
      wordFrequency[word] = (wordFrequency[word] || 0) + 1;
    });
  
    const sortedWords = Object.entries(wordFrequency).sort((a, b) => b[1] - a[1]);
  
    return sortedWords.slice(0, limit).map(([word, count]) => ({ word, count }));
  }
  
  const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
  
  const cleanedText = cleanText(sentence);
  console.log(cleanedText);
  
  console.log(mostFrequentWords(cleanedText));
  
