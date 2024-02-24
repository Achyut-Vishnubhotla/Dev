//Async functions vs Sync functions

//what does synchronous functions means?

//Together, one after the other, sequential 
//only one thing is happening at a time

/*ex: making maggi-> boiling water then 
                     putting maggie into water
                     cutting veggies then
                     etc etc


//what does asynchronous mean?

//opposite to synchronous
//Happens in parts(things are happening parallelly)
//Multiple things are context switching with each other

ex: while boiling water, started cutting veggies
    telling friend to bring the ketchup from store

*/

//lets build intuition

//Human brain and body is single threaded
//But we can context switch b/w tasks, or we can delegate taks to other other people

/* u have 4 tasks:
 1. Boil water
 2. cut vegetables
 3. open maggie packet
 4. get ketchup from the shop nearby

now it is on u to do these synchronously or asynchronously
*/

//now if u do this synchronously
/*
for boiling water u took                 -> 5 mins
for opening maggie packet u took         -> 1 mins
for cutting veggies u took               -> 10 mins
for getting ketchup from the shop u took -> 20 mins
 totally u took 36 mins to complete the task
  when u done the tasks sequentially
  this is kind of being dumb
 */

// now if u do these asynchronously
// or could u multitask(more technically context switch or delegate the task to other people)
/*
u started boiling water and delegated the ketchup task to a friend
opened maggie packet in 1 mins
while cutting veggies checked the water for 1 sec
finished cutting veggies in 10 mins
friend came back from the store with ketchup in 10 mins
  here the total time taken to complete the work is 12 mins
*/

//is this approach better? -> yes
//u made the task parallelising and context switching
//completed the task in less time


//Now How does JS do the same? Can JS delegate? can JS context switch?
// yes! Using asynchronous functions

//lets introduce an asynchronus function(setTimeout)
//setTimeout is the global function given by js(not exactly js, it is an web api technically)
//this the function that is used to run a function after some duration in milliseconds

function findSum(n){
  let ans=0;
  for(let i=0;i<n;i++){
    ans+=i;
  }
  return ans;
}

function findSumTill100(){
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000); //calling an async function
//this is similar to the friend(delegating the task to other)
console.log("hello world");
//here the first hello world will be called and after one sec findSumTill100 will be called
//after the whole code is executed the setTimeout will be executing after the given time
//here the thread is not depended on the async function
//async function will be used here for the thread to be free

//if u compare it with a synchronous code
/*
function findSum(n){
  let ans=0;
  for(let i=0;i<n;i++){
    ans+=i;
  }
  return ans;
}

function findSumTill100(){
  console.log(findSum(100));
}

//busy waiting
function syncSleep(){
  let a=1;
  for(let i=0;i<1000000000;i++){
    a++;
  }
}
syncSleep();
findSumTill100();
console.log("hello world");

//here syncSleep() will be called first then findSumTill100() will be called
//and then hello world will be logged 
//i.e., here it happens sequentially(synchronous)
*/



//few more async functions that javascript provides
//one is setTimeout
//fs.readFile -> to read a file from your filesystem
//fetch -> to fetch some data from an API endpoint


//try this in the replit
const fs =  require("fs");
//fs -> stands for filesystem, it is (external library)basically a node.js library that lets u do reading from a file, writing to a file
fs.readFile("a.txt","utf-8",function (err, data){
  console.log(data);
})
//utf-8 is just the encoding in which u want to read this file
//encoding means, to read a file there r various ways like u can read then as bytes
//the one we want is to read what is written exactly the same for that v r using utf-8

//function(err,data){console.log(data)} -> it is an anonymous function
//this is called error first callbacks
//in which first u get the error argument and then the data


console.log("hi there");
//the output in the console is 
// hi there
// hello there

//because as readFile is async function
//even the readFile is above the console.log("hi there")
//as we delegated the task to readFile it executes after the whole code is executed


//now guess the output?
const fs =  require("fs");

fs.readFile("a.txt","utf-8",function (err, data){
  console.log(data);
})

console.log("hi there");
//takes very long than file read
for(let i=0; i<100000000000; i++){
  a++;
}
 console.log("hi there 2");


 //output is 
 // hi there 
 //hi there 2 (after some time)
 //hello there(from readFile)

//even the file read is done it will wait till the whole code completely execute and then it'll be logged
//more technically
//even the file read is done(in the web apis section as per the duration mentioned) it will wait(in callback queue) till the whole code completely execute(till call stack is free) and then it'll be logged(and then event loop will pick it from callback queue to the call stack)
//this is how a async function works at high level in javascript

// to visualize at the javascript architecture that lets us achieve this asynchronous nature
//go to latentflip.com/loupe


//promises
//consider this code
/*
function findSum(n){
  let ans=0;
  for(let i=0;i<n;i++){
    ans+=i;
  }
  return ans;
}

function findSumTill100(){
  console.log(findSum(100));
}

setTimeout(findSumTill100, 1000); 
console.log("hello world");
*/
//this code is ugly

//promises are the syntactical sugar that make this code slightly more readable

//until now we've only used other people's asynchronous functions
//how can we create an synchronous function of our own?

//it is just a wrapper(cover) on top of another async function, which is fine
//usually all async functions u write will be on the top of JS provided async funcions like setTimeout or fs.readFile


//UGLY WAY OF WRITING PROMISES
const fs = require("fs");

//my own asynchronous function
function achyutReadFile(cb){
  fs.readFile("a.txt","utf-8",function (err, data){
    cb(data)
  })
}

function onDone(data){
  console.log(data);
}

achyutReadFile(onDone);


//CLEANER WAY(PROMISES) 
const fs = require("fs");

//my own asynchronous function
function achyutReadFile(){
  return new Promise(function(resolve){
    fs.readFile("a.txt","utf-8",function(err, data){
      resolve(data);
    });
  })
}
//here there r no callbacks
//reason to introduce promise is to get rid of callbacks 
//callbacks r ugly way to write async code because of callback hell

//its just syntactical sugar
//still uses callbacks under the hood

//callback function to call
function onDone(data){
  console.log(data);
}

achyutReadFile().then(onDone);


/*
it is similar to the new Date()

var d= new Date();
console.log(d.getime());
*/

/*
var d = new promise(function(resolve){
  setTimeout(function(){
    resolve("foo");
  },1000)
});

function callback(){
  console.log(d);
}
console.log(d);
d.then(callback)
*/
//basically promises and callbacks used to transfer data from one function to other


//what is even a promise?
//it is just a class that makes callbacks and async functions slightly more readable
/*
let p = new Promise();
console.log(p);
*/
//whenever u create it, u need to pass in a function as the first argument which has the resolve as the first argument
/*
let p = new Promise(function(resolve){

});
console.log(p)

output:
Promise { <pending> }

*/
//small example of code in promise that immediately reslves
/*
let p = new Promise(function(resolve){
  resolve("hi there")
});
p.then(function(){
  console.log(p)
})

output:
Promise { 'hi there' }

*/

//resolve main goal is -> place for the writer of the async function to do their magic(get ketchup)
//and call resolve at the end with the data

//.then gets called whenever the async function resolves





//async await

function achyutAsyncFunction(){
  let p = new Promise(function(resolve){
    //do some async logic here
    resolve("hi there")
  });
  return p;
}

async function main(){
  //no callbacks, no .then syntax
  //achyutAsyncFnction().then(function(value){
  //    console.log(value); 
  // })
  let value = await achyutAsyncFunction();
  console.log("hi there 1");
}

main();


//again it is just syntactical sugar. still uses callbacks/promises under the hood
//makes code much more readable than callbacks/promises
//usually used in the caller side, not on the side where u define an async function

//any function that wants to use await, need to be async
//rather than using the .then syntax , we add await before and get the final value in the variable