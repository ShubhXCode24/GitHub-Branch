function sayHello(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayBye() {
   console.log('Bye Bye');
}

sayHello('John', sayBye);


const admin = 'Shubham';
const profile = 'Frontend Developer';