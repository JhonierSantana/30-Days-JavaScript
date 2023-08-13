const challenges = asabenehChallenges2020.challenges;

const challengeContainer = document.getElementById('challengeContainer');

function createChallengeElement(challenge) {
    const challengeElement = document.createElement('div');
    challengeElement.classList.add('challenge');

    const nameElement = document.createElement('div');
    nameElement.classList.add('challenge-name');
    nameElement.textContent = challenge.name;
  
    const statusElement = document.createElement('div');
    statusElement.classList.add('challenge-status');
    statusElement.textContent = `Status: ${challenge.status}`;
    
    if (challenge.status === 'Done') {
    challengeElement.classList.add('done');
    }
    if (challenge.status === 'Ongoing'){
      challengeElement.classList.add('ongoing')
    }
    if (challenge.status === 'Coming'){
      challengeElement.classList.add('coming')
    }
    const topicsElement = document.createElement('ul');
    topicsElement.classList.add('challenge-topics');
    for (let topic of challenge.topics) {
        const topicItem = document.createElement('li');
        topicItem.textContent = topic;
        topicsElement.appendChild(topicItem);
    }

    if (challenge.githubUrl) {
        const githubLinkElement = document.createElement('a');
        githubLinkElement.classList.add('github-link');
        githubLinkElement.href = challenge.githubUrl;
        githubLinkElement.textContent = challenge.name;
        challengeElement.appendChild(githubLinkElement); 
    } else {
        challengeElement.appendChild(nameElement);
    }

    challengeElement.appendChild(statusElement);

    const challengeName = challenge.name;
    const indexOfOf = challengeName.indexOf("Of");
    const titleText = indexOfOf !== -1 ? challengeName.substring(indexOfOf + 3) : -1;

    const detailsElement = document.createElement('details');
    const summaryElement = document.createElement('summary');
    summaryElement.textContent = titleText;
    detailsElement.appendChild(summaryElement);
    detailsElement.appendChild(topicsElement);
    challengeElement.appendChild(detailsElement);


    return challengeElement;
}


for (let challenge of challenges) {
    const challengeElement = createChallengeElement(challenge);
    challengeContainer.appendChild(challengeElement);
}
function getRandomColor() {
let letters = '0123456789ABCDEF';
let color = "#";
for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
}
return color;
}

function changeColorRandomly() {
let yearElement = document.getElementById("year");
let randomColor = getRandomColor();
yearElement.style.color = randomColor;
}

setInterval(changeColorRandomly, 1000);

const socialContainer = document.getElementById('socialContainer');
function createSocialLinksElement(socialLinks) {
const socialLinksContainer = document.createElement('div');
socialLinksContainer.classList.add('social-links');

for (let link of socialLinks) {
const linkElement = document.createElement('a');
linkElement.href = link.url;
linkElement.innerHTML = link.fontawesomeIcon;

socialLinksContainer.appendChild(linkElement);
}

return socialLinksContainer;
}

const socialLinks = asabenehChallenges2020.author.socialLinks;
const socialLinksElement = createSocialLinksElement(socialLinks);
socialContainer.appendChild(socialLinksElement);

const bio = asabenehChallenges2020.author.bio;
const bioElement = document.createElement('p');
bioElement.classList.add('bio');
bioElement.textContent = bio;
const bioContainer = document.getElementById('bioContainer');
bioContainer.appendChild(bioElement);

const titles = asabenehChallenges2020.author.titles;
const titlesElement = document.createElement('div');
titlesElement.classList.add('titles-container');
const titlesList = document.createElement('ul');

for (let title of titles) {
const titleItem = document.createElement('li');
const titleIcon = title[0];
const titleText = title[1];
titleItem.textContent = `${titleIcon} ${titleText}`;
titlesList.appendChild(titleItem);
}

titlesElement.appendChild(document.createElement('h2')).textContent = 'Titles';
titlesElement.appendChild(titlesList);

const titlesContainer = document.getElementById('titles-container');
titlesContainer.appendChild(titlesElement);


const skills = asabenehChallenges2020.author.skills;
const skillsElement = document.createElement('div');
skillsElement.classList.add('skills-container');
const skillsList = document.createElement('ul');

for (let skill of skills) {
const skillItem = document.createElement('li');
skillItem.textContent = skill;
skillsList.appendChild(skillItem);
}

skillsElement.appendChild(document.createElement('h2')).textContent = 'Skills';
skillsElement.appendChild(skillsList);

const skillsContainer = document.getElementById('skills-container');
skillsContainer.appendChild(skillsElement);

const qualifications = asabenehChallenges2020.author.qualifications;
const qualificationsElement = document.createElement('div');
qualificationsElement.classList.add('quali-container');
const qualificationsList = document.createElement('ul');

for (let qualification of qualifications) {
const qualificationItem = document.createElement('li');
qualificationItem.textContent = qualification;
qualificationsList.appendChild(qualificationItem);
}

qualificationsElement.appendChild(document.createElement('h2')).textContent = 'Qualifications';
qualificationsElement.appendChild(qualificationsList);

const qualificationsContainer = document.getElementById('quali-container');
qualificationsContainer.appendChild(qualificationsElement);

const keywords = asabenehChallenges2020.keywords;
const keywordsContainer = document.getElementById('keywords-container');

for (let keyword of keywords) {
const keywordElement = document.createElement('div');
keywordElement.classList.add('keyword-circle');
keywordElement.textContent = keyword;

switch (keyword) {
case 'HTML':
    keywordElement.classList.add('keyword-html');
    break;
case 'CSS':
    keywordElement.classList.add('keyword-css');
    break;
case 'JS':
    keywordElement.classList.add('keyword-js');
    break;
default:
    keywordElement.style.backgroundColor = '#888';
    break;
}

keywordsContainer.appendChild(keywordElement);
}