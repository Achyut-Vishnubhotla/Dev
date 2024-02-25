
//arrows fns

//uptill now u have wrote fns as
function sum(a,b){
    return a+b;
}

const ans = sum(1,2);
console.log(ans);


//the same fn u can write in arrow function as
const sum1 = (a,b) => {
    return a+b;
}

//another
/*
app.get("/",(req,res) => {

})

//arrow fn as callback
app.get("/", function(req,res){

})

*/




//map,filter

//given an array, give me back a new array in 
//which every value is multiplied by 2
//input ->[1,2,3,4,5]
//output -> [2,4,6,8,10]

const input = [1,2,3,4,5];

///solution in a dumb way
/*
const newArray = [];

for(let i=0; i< input.length; i++){
    newArray.push(input[i]*2);
}

console.log(newArray);
*/

//solution using map fn
function transform(i){
    return i*2
}
const ans1 = input.map(transform);
console.log(ans1);

//other way using map with callback and anonymous
/* 
with callback
const ans=input.map(function transform(i){
    return i*2;
})
console.log(ans);

with anonymous
const ans=input.map(function (i){
    return i*2
})
console.log(ans);
*/



//filter
//what if i tell u, given an input array give me back all the even values from it

const arr = [1,2,3,4,5]

//solution in a ugly way
/*
const newArr=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        newArr.push(arr[i]);
    }
}

console.log(newArr);
*/

//solution using filter
function filterLogic(n){
    if(n%2==0){
        return true;
    } else {
        return false;
    }
}

const ans4 = arr.filter(filterLogic);

//most of the time u will use like this
/*
const ans4 = arr.filter(function (n){
    if(n%2==0){
        return true;
    } else {
        return false;
    }
});
console.log(ans4);
*/

//filter with arrow fn
/*
const ans4 = arr.filter((n) => {
    if(n%2==0){
        return true;
    } else {
        return false;
    }
});
console.log(ans4);
*/