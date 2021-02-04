//Работа с переменными

let user = 'John Doe';
console.log(user);

let student = 'Maxim';
console.log(student);

user=student;

//В переменной user значение переменной student
console.log(user);

//Работа с примитивами

let test = 1;

test = ++test;

test = test + '1';
// В переменной test строка 21
console.log(test);

test = --test;

// В переменной test число 20
console.log(test);

test=!test;
// В переменной testзначение false
console.log(test);

//Массивы

let result = 1;
let arr = [2, 3, 5, 8]
for(let i = 0; i<=arr.length; i++){
    result *= arr[i]
    console.log(result);
}

let arr1 = [2, 5, 8, 15, 0, 6, 20, 3]
for(let i = 0; i<=arr1.length; i++){
    if(arr1[i]>5 && arr1[i]<10)
    console.log(arr1[i]);
}

let arr2 = [2, 5, 8, 15, 0, 6, 20, 3]
for(let i = 0; i<=arr2.length; i++){
    if(arr2[i] % 2 == 0)
    console.log(arr2[i]);
}


