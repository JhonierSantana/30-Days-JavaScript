const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

const newSkill = {skill: 'BoostStrap', level: 8};
const newSkill2 = {skill: 'Express',level: 9};
const newSkill3 = {skill: 'SQL',level: 8};

const copyStudent = {
    ...student,
    skills: {
        ...student.skills,
        frontEnd: [...student.skills.frontEnd, newSkill],
        backEnd: [...student.skills.backEnd, newSkill2],
        dataBase: [...student.skills.dataBase, newSkill3],
        dataScience: [...student.skills.dataScience, 'SQL']
    }
}

console.log(JSON.stringify(copyStudent, null, 2));
