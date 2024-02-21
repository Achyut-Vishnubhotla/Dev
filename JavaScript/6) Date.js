function dateMethods() {
    const currentDate = new Date(); ///this means setting the current year
    console.log("Current Date:", currentDate);

    //Getting various components of the date
    console.log("Date:", currentDate.getDate()); //gives u the date
    console.log("Month:", currentDate.getMonth() + 1); //Months are zero-indexed, so adding 1
    console.log("Year:", currentDate.getFullYear());  //give current year 
    console.log("Year:", currentDate.getYear());  //this gives u the current year minus 1900(god knows y)
    console.log("Hours:", currentDate.getHours()); //gives the time of hours at the time of running
    console.log("Minutes:", currentDate.getMinutes()); //gives the time of minutes at the time of running
    console.log("Seconds:", currentDate.getSeconds()); //gives the time of seconds at the time of running

    //Setting components of the date
    currentDate.setFullYear(2022);  //after this the result will give u as year 2022
    console.log("After setFullYear:", currentDate);

    currentDate.setMonth(5); // setting month to june (zero indexed)
    console.log("After setMonth:", currentDate);

    //Getting and setting time in milliseconds since 1970
    console.log("Time in milliseconds since 1970:", currentDate.getTime());
    //imagine if u r running this in 1970 and the output will be zero
    //it gives the output as current year minus 1970 
    //i.e., no of milliseconds passed from 1970 to current year
    //epoch timestamp

    const newDate = new Date(2023, 8, 15); //creating a new date
    console.log("New Date:", newDate);

    //example Usage for date methods
}
dateMethods();


//getTime() is important

//a checkpoint is set in time (here it is 1970)
//y 1970, well u have pick some date right!
//and one of the good reason is if it was from 0, that can be a huge number

//y is this important?

function calculateSum(){
    let a=0;
    for (let i=0;i<10000;i++){
        a=a+i;
    }
    return a;
}

calculateSum();
//how much time it will take to execute? 
//may be 0.1 or 1
//u can calculate it by the getTime() function

function calculateSum(){
    let a=0;
    for (let i=0;i<100000000;i++){
        a=a+i;
    }
    return a;
}

const beforeDate = new Date();
const beforeTimeInMs = beforeDate.getTime();  //timestamp before running the function
calculateSum();
const afterDate = new Date();
const afterTimeInMs = afterDate.getTime();   //timestamp after running the function

console.log(afterTimeInMs - beforeTimeInMs);   //this gives the time that the function took to execute the function



//if u want to print the time like stopwatch
//u have to use setInterval()

function currentTimePrint(){
    console.log(new Date().getTime());
}
setInterval(currentTimePrint, 1000);
//u r basically calling the function currentTimePrint for every 1 sec(=1000ms)

