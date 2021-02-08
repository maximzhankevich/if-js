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

//Function

//Функция palindrome

function palindrome (str){
    //debugger
    let len = str.length;
    for (i = 0; i < str.length; i++){
        if (str[i] !== str[len - 1 - i]) {
            return false
        }
        
    }

    return true
}

palindrome ("шалаш");
palindrome ("жыве");
palindrome ("Беларусь");

//Функция min(a, b) и функция max(a,b)

function min (a, b){
    //debugger
    if (a < b){
        return a
    }
    return b
}

min(88,6);
min(9,777);


function max (a, b){
    //debugger
    if (a > b){
        return a
    }
    return b
}

max(88,6);
max(9,777);


function min(a, b) {
    return a < b ? a : b;
}

  function max(a, b) {
    return a > b ? a : b;
}

//Замена элементов массива


function changeZero1() {
    let arr = [1,10,2,20,3,30,4,40,5,50];
    for (i = 0; i < arr.length; i++){
        if (arr[i] % 10 == 0){
            arr = arr.join().replace(/0/g, 'zero');
            console.log(arr.split(','));
        }
    }
}

changeZero1();






