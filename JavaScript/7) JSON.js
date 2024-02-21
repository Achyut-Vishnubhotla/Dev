//JSON- JavaScript Object Notation

const users = {
    "name": "Achyut",
    "age": 19,
    "gender": "male",
}

console.log(users["name"]);

function jsonMethods(jsonString){
    console.log("Original JSOn String:", jsonString);

    //parsing JSON string to JavaScript object
    let parsedObject = JSON.parse(jsonString);
    console.log("After JSON.parse():", parsedObject);

    //Stringifying JavaScript Object to JSON string
    let jsonStringified = JSON.stringify(parsedObject);
    console.log("After JSON.stringify():", jsonStringified);
}


//Example Usage for JSON Methods
const sampleJSONString =
    '{"key": "value", "number": 42, "nested":{"nestedKey':"nestedValue"} };


jsonMethods(sampleJSONString);