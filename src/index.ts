//Tipagem
let x: number = 10;

x=12;
console.log(x);

//Inferencia X Annotation

let y  = 12; //inferencia
let ys:number = 12; //annotation

//Tipos Básicos
let firstName: string = "Eduardo";
let age: number = 30;
const isAdmin: boolean = true;

//String != string
console.log(typeof firstName);

firstName = "João"

console.log(firstName);

//Object
const myNumbers : number[] = [1,2,3]
console.log(myNumbers);
console.log(myNumbers.length);
    //console.log(myNumbers.toLocaleUpperCase()); not exists
console.log(firstName.toLocaleUpperCase)
myNumbers.push(5);

console.log(myNumbers);

//Tuplas
let myTuple: [number,string,string[]];
myTuple  = [3,"Eduardo",["a","b"]];
    //myTuple = [true, false, true];


//Object literals -> {prop: value}
const user: {name: String, age: number} ={
    name: "Eduardo",
    age: 18,
};

console.log(user);
console.log(user.age);
console.log(user.name);

    //user.job = "Programador" - ERRO

//ANY
let a:any =  0;
a = true;
a = "Eduardo";

//Union Type
let id: string | number =  "10";
id = 11;

//Type Alias
type myIdType =  number | string 

const userId : myIdType = 10
const productId: myIdType = "0001"
const shirdId: myIdType = 123;

//Enum
// Tamanho de roupas(size: Médio, size: pequeno)
enum size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
}

const camisa = {
    name: "Camisa gola V",
    size: size.G,
};

console.log(camisa);

// literal types
let teste: "algumValor" | null;

    //teste = "outroValor" - ERRO
teste = "algumValor";
teste =  null;

//Funções
function sum(a: number ,b: number){
    return a + b;
}
console.log(sum(12,10));

    //console.log(sum("12", true)); - ERRO
function sayHelloTo(name: string): string{
    return `Hello ${name}`;
}

console.log(sayHelloTo("Eduardo"));

function logger(msg: string): void{
    console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string): void{
    if(greet){
        console.log(`Olá ${greet} ${name}`);
    }else {
        console.log(`Olá ${name}`);
    }   
}

greeting("Eduardo");
greeting("Eduardo", "Sr")

//Interfaces
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({n1: 1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 5,
    n2: 10,
};

console.log(multiplyNumbers(someNumbers));

// Narrowing
// Checagem tipos
function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}`);
        return;
    }
    console.log("Não foi passado nenhum número");
}

doSomething(1);
doSomething(true);

// Generics
function showArraysItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    })
}

const a1 = [1,2,3];
const a2 = ["A","B","C"];

showArraysItems(a1);
showArraysItems(a2);

// Classes
class User {
    name
    role
    isApproved
    age

    constructor(name: string, role: string, isAproved: boolean,age: number){
        this.name =  name;
        this.role =  role;
        this.isApproved = isAproved;
        this.age = age;
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`);
    }

    showUserAge(canShow: boolean){
        if(canShow){
            console.log(`A idade do usuario é ${this.age}`);
            return;
        }
        console.log("Informação restrita!");
    }
}

const eduardo = new User("Eduardo","Admin", true,22);

console.log(eduardo);

eduardo.showUserName();
eduardo.showUserAge(true);
eduardo.showUserAge(false);

// Interfaces em classes
interface IVehicle{
    brand: string
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const fusca = new Car("VW",4)
fusca.showBrand();

// Herança

class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number){
        super(brand, wheels);
        this.engine = engine;
    }
}

const a4 = new SuperCar("Audi",4,2.0);

console.log(a4);
a4.showBrand();

// Decorators

// Constructor decorator
function BaseParameters(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor {
            id = Math.random();
            createdAt = new Date();
        };
    };
}

@BaseParameters()

class Person {
    name 
    constructor(name: string){
        this.name =  name;
    }
}

const sam = new Person("Sam");
console.log(sam);