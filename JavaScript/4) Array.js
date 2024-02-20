// Array handbook

// Array: push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing


//push()
function pushExample(arr, element){
    console.log("Original Array:", arr);

    arr.push(element);
    console.log("After push:", arr);
}
pushExample([1,2,3],4);

//pop()
function popExample(arr){
    console.log("Original Array:",arr);
    arr.pop();
    console.log("After pop:",arr);
}
popExample([1,2,3]);


//shift() - pops element from the front
function shiftExample(arr){
    console.log("Original Array:",arr);
    arr.shift();
    console.log("After shift:",arr);
}
shiftExample([1,2,3]);

//unshift() - pushes element from the front
function unshiftExample(arr, element){
    console.log("original Array:",arr);
    arr.unshift(element);
    console.log("After unshift:",arr);
}
unshiftExample([1,2,3],0);

//concat() - merging 2 arrays
function concatExample(arr1,arr2){
    console.log("Original Arrays:",arr1,arr2);
    let arr3=arr1.concat(arr2);
    console.log("After concat:",arr3);
}
concatExample([1,2,3],[4,5,6]);

//in push() -> passing element is a number
//in concat() -> passing element is array



//forEach() -> to iterate over an array
/* u can iterate in this way
const intialArray = [1,2,3];
for(let i=0;i<intialArray;.length,i++){
    console.log(intialArray[i]);
}
*/
//forEach() will take another function as argument -> callback
//easy way
const intialArray = [1,2,3];
function logThing(str){
    console.log(str);
}
intialArray.forEach(logThing);

/* complex way
function forEachExample(arr){
    console.log("original Array:",arr);
    arr.forEach(function(item,index){
        console.log(item,index);
    });
}
forEachExample([1,2,3]);
*/


//map()
function mapExample(arr){
    console.log("Original Array:",arr);

    let newArr = arr.map(function(item) {
        return item * 2;
    });
    console.log("After map:", newArr);
}
mapExample([1,2,3]);

//filter()
function filterExample(arr) {
    console.log("Original Array:",arr);

    let newArr = arr.filter(function(item) {
        return item > 3;
    });
    console.log("After filter:",newArr);
}
filterExample([1,2,3,4,5]);

//find()
function findExample(arr){
    console.log("original Array:",arr);

    let found = arr.find(function(item) {
        return item > 3;
    });
    console.log("After find:", found);
}
findExample([1,2,3,4,5]);

//sort()
function sortExample(arr){
    console.log("Original Array:", arr);

    arr.sort(function(a,b) {
        return a-b;
    });
    console.log("After sort:", arr);
}
sortExample([5,2,3,4,1]);

