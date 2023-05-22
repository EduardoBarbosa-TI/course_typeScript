"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 12;
console.log(x);
let y = 12;
let ys = 12;
let firstName = "Eduardo";
let age = 30;
const isAdmin = true;
console.log(typeof firstName);
firstName = "João";
console.log(firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toLocaleUpperCase);
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [3, "Eduardo", ["a", "b"]];
const user = {
    name: "Eduardo",
    age: 18,
};
console.log(user);
console.log(user.age);
console.log(user.name);
let a = 0;
a = true;
a = "Eduardo";
let id = "10";
id = 11;
const userId = 10;
const productId = "0001";
const shirdId = 123;
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: "Camisa gola V",
    size: size.G,
};
console.log(camisa);
let teste;
teste = "algumValor";
teste = null;
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 10));
function sayHelloTo(name) {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Eduardo"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Eduardo");
greeting("Eduardo", "Sr");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10,
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado nenhum número");
}
doSomething(1);
doSomething(true);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["A", "B", "C"];
showArraysItems(a1);
showArraysItems(a2);
class User {
    name;
    role;
    isApproved;
    age;
    constructor(name, role, isAproved, age) {
        this.name = name;
        this.role = role;
        this.isApproved = isAproved;
        this.age = age;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserAge(canShow) {
        if (canShow) {
            console.log(`A idade do usuario é ${this.age}`);
            return;
        }
        console.log("Informação restrita!");
    }
}
const eduardo = new User("Eduardo", "Admin", true, 22);
console.log(eduardo);
eduardo.showUserName();
eduardo.showUserAge(true);
eduardo.showUserAge(false);
class Car {
    brand;
    wheels;
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
class SuperCar extends Car {
    engine;
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    BaseParameters()
], Person);
const sam = new Person("Sam");
console.log(sam);
