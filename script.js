function sayHello(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayBye() {
   console.log('Bye Bye');
}

sayHello('John', sayBye);


console.log('This is a new feature');