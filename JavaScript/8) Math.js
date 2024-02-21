function mathMethods(value){
    console.log("Original Value:",value);

    let rounded = Math.round(value);
    console.log("after round():", rounded);

    let ceiling = Math.ceil(value);
    console.log("After ceil():",ceiling);

    let flooring = Math.floor(value);
    console.log("after floor():", flooring);

    let randomValue = Math.random();
    console.log("After random():", randomValue);

    let maxValue = Math.max(5,10,15);
    console.log("After max():", maxValue);

    let minValue = Math.min(5,10,15);
    console.log("After min():", minValue);

    let powerOfTwo = Math.pow(value, 2);
    console.log("After pow():", powerOfTwo);

    let squareRoot = Math.sqrt(value);
    console.log("After sqrt():", squareRoot);
}

//Example Usage for MAth Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);


//importants are 

//math.random()
//gives u random number every time u run it
