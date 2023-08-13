const firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent); 
const secondParagraph = document.querySelector('#second');
const thirdParagraph = document.querySelector('#third');
const fourthParagraph = document.querySelector('#fourth');
console.log(secondParagraph.textContent); 
console.log(thirdParagraph.textContent);
console.log(fourthParagraph.textContent); 
const allParagraphs = document.querySelectorAll('p');
llParagraphs.forEach(paragraph => {
console.log(paragraph.textContent);
allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});
fourthParagraph.textContent = 'Fourth Paragraph';

// Setting id and class using dot notation
firstParagraph.id = 'first';
firstParagraph.className = 'paragraph';

// Setting id and class using setAttribute method
secondParagraph.setAttribute('id', 'second-id');
secondParagraph.setAttribute('class', 'paragraph');

// Setting id and class using attributes property
hirdParagraph.attributes.id.value = 'third-id';
thirdParagraph.attributes.class.value = 'paragraph';

// Setting id and class using setAttribute method
fourthParagraph.setAttribute('id', 'fourth-id');
fourthParagraph.setAttribute('class', 'paragraph');

firstParagraph.style.color = 'blue';
secondParagraph.style.background = 'yellow';
thirdParagraph.style.border = '1px solid black';
fourthParagraph.style.fontSize = '18px';
fourthParagraph.style.fontFamily = 'Arial, sans-serif';


allParagraphs.forEach((paragraph, index) => {
    if (index === 0 || index === 2) {
        paragraph.style.color = 'green';
    } else {
        paragraph.style.color = 'red';
    }
});

firstParagraph.textContent = 'First Paragraph';
secondParagraph.textContent = 'Second Paragraph';
thirdParagraph.textContent = 'Third Paragraph';
fourthParagraph.textContent = 'Fourth Paragraph';


});