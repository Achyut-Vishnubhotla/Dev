class Animal {
    constructor(name, legCount) {
        this.name = name;
        this.legCount = legCount;
        this.speaks = speaks;
    }
    describe() {
        return `${this.name} has ${this.legCount} legs`
    }
    speak() {
        console.log("hi there " + this.speaks);
    }
}



let dog = new Animal("dog",4,"bow bow");   //create object
let cat = new Animal("cat",4,"meow");
cat.speak();   //call function on object