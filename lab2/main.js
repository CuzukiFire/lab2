import { addLetterGrade, filterFailed,calculateAverage, findTopStudent  } from "./features.js";
const grades = [
    { name: "Макар", score: 85 },
    { name: "Денис", score: 92 },
    { name: "Анна", score: 78 },
    { name: "Даша", score: 88 },
    { name: "Студент_X", score: 45 }
];


console.log("Среднее значение баллов студентов: ", calculateAverage(grades));
console.log("\n Лучший студент: ", findTopStudent(grades));
console.log("\n Прошедшие студенты порог в 60 баллов: ", filterFailed(grades, 60));
console.log("\n Буквенная разбаловка студентов: ", addLetterGrade(grades));