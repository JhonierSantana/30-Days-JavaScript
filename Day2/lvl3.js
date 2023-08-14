const sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
const word = 'love';

const regex = new RegExp(`\\b${word}\\b`, 'gi');
const count = (sentence.match(regex) || []).length;

console.log(`The word "${word}" appears ${count} times.`);

const sentence2 = 'You cannot end a sentence with because because because is a conjunction';
const word2 = 'because';

const regex2 = new RegExp(`\\b${word2}\\b`, 'gi');
const count2 = (sentence2.match(regex2) || []).length;

console.log(`The word "${word2}" appears ${count2} times.`)

const sentence3 = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

const cleanedSentence = sentence3.replace(/[^\w\s]/gi, '');
console.log(cleanedSentence);

const text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
const regex3 = /\d+/g; 
const numbers = text.match(regex3); 

let totalIncome = 0;
for (let i = 0; i < numbers.length; i++) {
  totalIncome += parseInt(numbers[i]); 
}

console.log('Total annual income:', totalIncome);
