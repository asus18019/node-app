// 02
const user = require('./files/csv&jsonFiles/user.json');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// write json file
const people = {
    sex: 'male',
    age: 21,
    name: 'John',
    company: 'Google'
}

fs.writeFile('files/csv&jsonFiles/user.json', JSON.stringify(people), (err) => {
    if(err) console.log(err);
})

// read json file
console.log(user);

// write CSV file
const csvWriter = createCsvWriter({
    path: 'files/csv&jsonFiles/userWrite.csv',
    header: [
        {id: 'name', title: 'NAME'},
        {id: 'lang', title: 'LANGUAGE'},
        {id: 'sex', title: 'SEX'},
        {id: 'age', title: 'AGE'}
    ]
});

const records = [
    {
        name: 'Bob',
        lang: 'French, English',
        sex: 'male',
        age: 20
    },
    {
        name: 'Mary',
        lang: 'English',
        sex: 'female',
        age: 18
    }
];

csvWriter.writeRecords(records)
    .then(() => {
        console.log('...Done');
    });