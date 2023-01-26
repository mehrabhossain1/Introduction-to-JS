// 1
var money = 1000;
var orange = 400;
var apple = 300;
var totalCost = orange + apple;
var remainder = money - totalCost;
console.log(remainder);

// 2
var math = 75.25;
var bio = 65;
var chem = 80;
var phy = 35.45;
var ban = 99.50;
var totalMarks = math + bio + chem + phy + ban;
var avgMark = totalMarks / 5;
avgMark = avgMark.toFixed(2);
avgMark = parseFloat(avgMark);
console.log(avgMark);

// 3
var firstSentence = 'I am going to be';
var secondSentence = 'an awesome web developer';
var fullSentence = firstSentence + ' ' + secondSentence;
console.log(fullSentence);

// 4
var num1 = 119;
var num2 = 5;
var sum = num1 % num2;
console.log(sum);