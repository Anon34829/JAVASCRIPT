/*
Make two versions of your random insult generator: one that
uses the + operator to create the string, and one that createsn
an array and joins it with " ". Which do you prefer, and why?
*/


var Insults1 = ['smelly' , 'ugly' , 'dirty'];
var Insults2 = ['rotten' , 'distorted' , 'fucking'];
var Insults3 = ['pig', 'crocodile' , 'shrimp'];

var Insult1 = Insults1[Math.floor(Math.random() * Insults1.length)];
var Insult2 = Insults2[Math.floor(Math.random() * Insults2.length)];
var Insult3 = Insults3[Math.floor(Math.random() * Insults3.length)];

//var InsultGen = ['Your' , Insult1, 'face', 'is', Insult2, 'as', Insult3].join(' ');


var InsultGen = 'Your ' +  Insult1 + ' face' + ' is' + Insult2 + ' as '+ Insult3;

console.log(InsultGen);

































