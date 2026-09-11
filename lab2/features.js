export function calculateAverage(data) {
let average = 0;
let n = data.length;
for (let i = 0; i < n; i++) {
    average += data[i].score;
}
return (average / n);
}


export function findTopStudent(data) {
let n = data.length;
let student = ""
let max_grade = 0;
for (let i = 0; i < n; i++)
    {
    if (data[i].score > max_grade) 
        {
        student = data[i].name;
        max_grade = data[i].score;
        }
    }
return student;
}

export function filterFailed(data, passScore) {
let n = data.length;
let passed = [];
for (let i = 0; i < n; i++) 
    {
    if (data[i].score > passScore) 
        {
        passed.push(data[i].name);
        }
    }
return passed;
}

export function addLetterGrade(data) {
    let n = data.length;
    for (let i = 0; i < n; i++)
    {
        let score = data[i].score;
        if (score >= 90) {
            data[i].letters = 'A';
        }
        else if (score >= 75) {
            data[i].letters = 'B';
        }
        else {
            data[i].letters = 'C'
        }
    }
        return data;
    }
