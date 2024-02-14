function explainParseInt(value){
    console.log("Original value:",value);
    let result = parseInt(value);
    console.log("After parserInt:",result);
}

explainParseInt("42");   //42
explainParseInt("42px");   //42
explainParseInt("3.14");   //3

// if u have gibberish at the end,its fine 

/* explainParseInt("aswsde56vfty") 
  if u have gibberish before the number output is garbage
*/


//similarly parseFloat
function explainParseFloat(value){
    console.log("Original Value:",value);
    let result = parseFloat(value);
    console.log("After parseFloat:",result);
}

explainParseFloat("3.14");
explainParseFloat("42");
explainParseFloat("42px");