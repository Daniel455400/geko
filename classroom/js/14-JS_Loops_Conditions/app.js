let numbers = [12, 5, 8, 21, 3, 17, 9, 30, 2, 14];

console.log("Բոլոր թվերը:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("10-ից մեծ թվերը:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 10) {
        console.log(numbers[i]);
    }
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
}
console.log("Թվերի գումարը:", sum);

let min = numbers[0]; 
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
        min = numbers[i]; 
    }
}
console.log("Ամենափոքր թիվը:", min);

let countEven = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) { 
        countEven++;
    }
}
console.log("Զույգ թվերի քանակը", countEven);