// Работа с переменными

let user = 'John Doe';
console.log(user);

const student = 'Maxim';
console.log(student);

user = student;

// В переменной user значение переменной student
console.log(user);

// Работа с примитивами

let test = 1;

test += test;

test += '1';
// В переменной test строка 21
console.log(test);

test -= test;

// В переменной test число 20
console.log(test);

test = !test;
// В переменной testзначение false
console.log(test);

// Массивы

let result = 1;
const arr = [2, 3, 5, 8];
for (let i = 0; i <= arr.length; i += 1) {
  result *= arr[i];
  console.log(result);
}

const arr1 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i <= arr1.length; i += 1) {
  if (arr1[i] > 5 && arr1[i] < 10);
}

const arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i <= arr2.length; i += 1) {
  if (arr2[i] % 2 === 0);
  console.log(arr2[i]);
}

// Function

// Функция palindrome

function palindrome(str) {
  // debugger
  const len = str.length;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
palindrome('шалаш');
palindrome('жыве');
palindrome('Беларусь');

// Функция min(a, b) и функция max(a,b)

function min(a, b) {
  // debugger
  if (a < b) {
    return a;
  }
  return b;
}
min(88, 6);
min(9, 777);

function max(a, b) {
  // debugger
  if (a > b) {
    return a;
  }
  return b;
}
max(88, 6);
max(9, 777);

function min1(a, b) {
  return a < b ? a : b;
}
min1(88, 6);

function max1(a, b) {
  return a > b ? a : b;
}
max1(88, 6);

// Замена элементов массива

function changeZero1() {
  let arrA = [1, 10, 2, 20, 3, 30, 4, 40, 5, 50];
  for (let i = 0; i < arrA.length; i += 1) {
    if (arrA[i] % 10 === 0) {
      arrA = arrA.join().replace(/0/g, 'zero');
      console.log(arrA.split(','));
    }
  }
}
changeZero1();

// Покрасьте абзацы по клику

const colors1 = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const paragraph1 = document.getElementById('text1');
let count1 = 0;

function changeColor1(e) {
  let currentColor1 = e.target.style.color;
  for (let i = 0; i < colors1.length; i += 1) {
    if (count1 === i) {
      currentColor1 = colors1[i];
    }
  }
  e.target.style.color = currentColor1;
  count1 += 1;
  if (count1 >= colors1.length) {
    count1 = 0;
  }
}
paragraph1.addEventListener('click', changeColor1);

const colors2 = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const paragraph2 = document.getElementById('text2');
let count2 = 0;

function changeColor2(e) {
  let currentColor2 = e.target.style.color;
  for (let i = 0; i < colors2.length; i += 1) {
    if (count2 === i) {
      currentColor2 = colors2[i];
    }
  }
  e.target.style.color = currentColor2;
  count2 += 1;
  if (count2 >= colors2.length) {
    count2 = 0;
  }
}
paragraph2.addEventListener('click', changeColor2);

const colors3 = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];
const paragraph3 = document.getElementById('text3');
let count3 = 0;

function changeColor3(e) {
  let currentColor3 = e.target.style.color;
  for (let i = 0; i < colors3.length; i += 1) {
    if (count3 === i) {
      currentColor3 = colors3[i];
    }
  }
  e.target.style.color = currentColor3;
  count3 += 1;
  if (count3 >= colors3.length) {
    count3 = 0;
  }
}
paragraph3.addEventListener('click', changeColor3);

// String

let date = '2020-11-26';

function changeDate(){
  let arrDate = date.split('-'); 
  arrDate = arrDate.reverse().join('.'); 
  console.log(arrDate);  
}
changeDate();

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function search(text) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    const current = data[i].country + data[i].city + data[i].hotel;
    if (current.includes(text)) {
      result.push(data[i]);
    }
  }
  return console.log(result);
}
search('Germany');
