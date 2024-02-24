//loops
//if problem statement is calculate the sum of 0 to 100

//then dumb way to do this
/*
let ans=1+2+3+4+5+6+7+8+...+50;
console.log(ans);
*/

//instead of that
//we can use loops for the repeated logic
let ans=0;
for(let i=1;i<=50;i++){
    ans=ans+i;
}
console.log(ans);

//for the visualiztion go to latentflip.com/loupe



//functions
//main use is to decreaxe the repeatition of the code
function findSum(n){
    let ans=0;
    for(let i=1;i<n;i++){
        ans=ans+i;
    }
    return ans;
}

let ans1=findSum(100);
console.log(ans1);

let ans2=findSum(1000);
console.log(ans2);


//but the dumb way to write the code
/*
let n=100;
let ans3=0;

for(let i = 1;i<n;i++){
    ans3=ans3+i;
}
console.log(ans3);

let n2=1000;
let ans4 = 0;

for(let i = 1; i < n; i++){
    ans4=ans4+i;
}
console.log(ans2);
*/





//callbacks

//in any language a function can call other function
/*
function square1(a){
    return n*n;
}

function sumOfsquares(a,b){
    const val1=square(a);
    const val2=square(b);

    return val1+val2;
}

function sumOfCube(a,b){
    const val1=cube(a);
    const val2=cube(b);
    return val1+val2;
}

console.log(sumOfCube(1,2));
*/

//a simple example of using callback
function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOfSomething(a,b,callback){
    console.log(callback);
    const val1 = callback(a);
    const val2 = callback(b);
    return val1+val2;
}

const ans5 = sumOfSomething(2,2,square);
console.log(ans5);






//anonymous function
//function with no name
//cant be defined in the global scope
//u have to pass it native in other function

function sumOfThings(a,b,fn){
    const val1=fn(a);
    const val2 = fn(b);
    return val1+val2;
}

sumOfThings(1,3,function (a){
    return a*a; 
})


//instead of defining outside
/*
function square1(a){
    return n*n;
}

const ans5 = sumOfSomething(2,2,square);
console.log(ans5);
*/
//u r just doing this
/*
sumOfThings(a,b,function square(a){
    return a*a
})

and that is the case with the anonymous function also
*/
