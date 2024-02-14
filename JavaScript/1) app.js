//javascript foundations

//simple primitives

//variables(var,let,const)

var z=1;
z=5
console.log(z);

let x=3;
x=9
console.log(x);

const a=1;
//a=3; gives u error
console.log(a); 

//const is the declaration that cannot be changed anytime
//it is introduced to introduce some safety to the program

//var, let, const are the declarations used for the variables
//let,const are which u will use in the real world
//let - declared for a value can be changing
//const - declared for a value that wont change


//Datatypes(strings,numbers,booleans)


let firstName ="Achyut";
let age = 19;
let isMarried = false

console.log("this person name is " + firstName + " and his age is " + age);


//if/else
 
//based on the isMarried variable an output should be printed
//so we use if / else statements

if(isMarried === false){
    console.log("Achyut is not Married");
}
else{
    console.log("Achyut is MArried");
}



//loops

//program to count the values 0 to 100 

let answer=0;

for(let i=0;i<=100;i++){
    answer=answer+i;
}

console.log(answer);



//some problems

//write a program to greet a person given their first and last name
let Name = "Achyut"
console.log("hello brooooo " + Name);


//write a program that greets a person based on their gender
let gender = "Male"
if(gender=="Male"){
    console.log("hey man whats up "+Name);
}
else{
    console.log("hello madam "+Name);
}


//write a program that counts from 0-1000 and prints 
let g=0;

for(let i=0;i<=1000;i++){
    g=g+i;
}
console.log(g);


//complex primitives

//arrays
//lets understand by examples only
 
const personArray=["Achyut","annad","bhashi"];
for(let i=0;i<=2;i++){
    console.log(personArray[i]);
}

//write a program prints all the even numbers in an array
const ages=[21,22,23,24,25];
for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}

//write a program prints the biggest number in the array




//write a program that prints all the main peoples first name given complex object

//objects
const user1 = {
    firstName:"Achyut",
    gender:"male"
}

console.log(user1["firstName"]);
console.log(user1["gender"]);


//now coming to the problem
const allUsers = [{
    firstName:"Achyut",
    gender:"male",
    metadata:{
        age:21,
        address: "always thampu"
    }
},{
    firstName:"Suhas",
    gender:"male"
},{
    firstName:"bhashi",
    gender:"male"
}]


for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"]);
    }
}

/*can be more also

for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["metadata"]["age"]=="21"){
        console.log(allUsers[i]["firstName"]);
    }
}

*/

//write a program that reverses all the elements of an array




//Functions

//abstract out logic in your program
//Take arguments as an input
//Return a value as an output
//you can think of them as an independent program that is supposed to do something, given an input
//functions can take other functions as input - this will confuse you(callbacks)

//write a function that finds the sum of two numbers
function findSum(a,b){
    sumValue = a+b;
    return sumValue;
}

const value = findSum(1,2);
const value3 = findSum(1,10);
console.log(value);
console.log(value3);


//callbacks

function sum(num1, num2){
    let result=num1+num2;
    return result;
}

function displayResult(data){
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data){
    console.log("sum's result is : " + data);
}

//you are only allowed to call one function after this
//how will you displayResult of a sum

function sum(num1, num2, fnToCall){
    let result=num1+num2;
    fnToCall(result);
}

function displayResult(data){
    console.log("Result of the sum is: " + data);
}

function displayResultPassive(data){
    console.log("sum's result is : " + data);
}

const ans = sum(1, 2, displayResult);
console.log(ans); 


//another callback example
function CalculateArthmetic(a,b,type){
    if (type == "sum"){
        const value=sum(a,b);
        return value;
    }
    if (type == "minus"){
        const value=sub(a,b);
        return value;
    }
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value1 = CalculateArthmetic(1,2,"sum");
console.log(value1);

//this is one way of writing it
/*
function CalculateArthmetic(a,b,arithmeticFinalFunction){
    const ans = arithmeticFinalFunction(a,b);
    return ans;
}

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

const value2 = CalculateArthmetic(1,5,sum);
console.log(value2);
*/
//giving error but in other compiler its fine

//setTimeout

function greet(){
    console.log("hello world");
}

setTimeout(greet,3*1000);

//setInterval
function greetAlien(){
    console.log("hello alien");
}
/*
setInterval(greetAlien, 3*1000);
*/
