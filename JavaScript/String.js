//string manipulation using buitin functions

//str.length

function getLength(str){
    console.log("Original String:", str);
    console.log("Length:", str.length);
}
getLength("hello World");

let ans="Achyut".length;
console.log(ans);
//u can use simply, but functions helps



//str.indexOf

function findIndexOf(str, target){
    console.log("Orginal String:",str);
    console.log("Index:",str.indexOf(target));
}
findIndexOf("hello World","World");
//any random target given which is not present in str gives index -1

//if world occurs 2 times in str, what would be the target
function findIndexOf(str, target){
    console.log("Orginal String:",str);
    console.log("Index:",str.indexOf(target));
}
findIndexOf("hello World World","World"); //here also it'll give the index of first occurence of world i.e., 6



//str.lastIndexOf

//if there r 3 occurences of world in str and u want the index of last occurence
function findIndexOf(str, target){
    console.log("Orginal String:",str);
    console.log("Index:",str.lastIndexOf(target));
}
findIndexOf("hello World World World","World");
//which returns 18


//str.slice

function getSlice(str,start,end){
    console.log("Original String:",str);
    console.log("After slice:",str.slice(start,end));
}
getSlice("Hello World",0,5);

let a="Achyut"
let c=a.slice(0,5); //slice(first index,last index)
console.log(c);     //last index is not included in the output

//str.substr - (deprecated)
const s=a.substr(2,5); //substr(first index, length of str)
console.log(s);

//the slice can be performed with your own function also
function cutIt(str,startIndex,endIndex){
    let newStr="";
    for(let i=0;i<str.length;i++){
        if(i>=startIndex && i<=endIndex){
            newStr=newStr+str[i];
        }
    }
    return newStr;
}

let value="Achyut";
let ans2=value.slice(2,6);     
console.log(ans2);              //hyut
console.log(cutIt(value,2,5));  //hyut  

//so u can write these urself 
//but it is always good to have all of this done in one line


//str.substring
function getSubstring(str,start,end){
    console.log("Original String:",str);
    console.log("After substring:",str.substring(start,end));
}
getSubstring("HelloWorld",0,5); //here also last index is not included in the output
//str.substr is deprecated but str.substring exists
//they r same in terms of functionality though



//str.replace
function replaceString(str, target, replacement){
    console.log("Original String:",str);
    console.log("After replace:",str.replace(target, replacement));
}
replaceString("Hello World","World","JavaScript");



//str.split
function splitString(str, separator){
    console.log("Original String:",str);
    console.log("After split:",str.split(separator));
}
splitString("Hello World"," ");
//this splits the string based on a delimeter(what u want to split ur string on)
const value4 = "hi,my,name,ios,Achyut"
const words = value4.split(",");
console.log(words);



//str.trim
function trimString(str){
    console.log("Original String:",str);
    console.log("After trim:",str.trim())
}
trimString("   Hello World   "); //trimmed out the extra spaces in the beginning and the end


//str.toUppercase
function toUpper(str){
    console.log("Original String:",str);
    console.log("After toUpperCase:",str.toUpperCase());
}
toUpper("Hello World");


//str.toLowerCase
function toLower(str){
    console.log("Original String:",str);
    console.log("After toLowerCase:",str.toLowerCase());
}
toLower("Hello World");



//here only slice and split are the good once 
//may be u might use these in th future

