//in binary there should be 2 operands and 1 operator
/*
a+b
a-b
a*b
a/b
*/

//also 
age = age + 1
age += 1

age = age - 1
age -= 1

//in unary
++age //pre increment(change, then use)
age++ //post increment(use, then change)

--age //pre decrement 
age-- //post decrement

//eg:
let age = 10;
let newAge = ++age;
//here age = 11 and newAge= 11 

let age1=10;
let newAge1 = age++;
//here newAge1=10 and age1=11


/*
Q) what is the value of each variable in each line of code?
*/

let num = 5;
let newNum = num++;
newNum = ++num;

//ans: newNum=7 and num=7