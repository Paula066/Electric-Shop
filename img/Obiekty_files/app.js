// const Animal = function (name) {
//     this.name = name;
//     this.children = [];
// }

// const hamster = new Animal('bobik');
// const canary = new Animal('spiewak');

// Animal.prototype.addChildren = function (childName) {
//     this.children.push(childName);
// }

// Animal.prototype.age = 2;

hamster.addChildren('romuś');

canary.age
hamster.age;


const maluch = new Car();


function Car() {
    // console.log(this);
}


// PROTOTYP

const Person = function (name, age) {
    this.name = name;
    this.age = age;
    this.childern = [];
    // this.addChildren = function (name) {
    //     this.childern.push(name);
    // }
}

Person.prototype.addChildren = function (name) {
    this.childern.push(name);
}

const arek = new Person('arek', 20)
const monila = new Person('monika', 30) //instancje

monila.addChildren("basia");


function Player() {

}

class User {

}
Player.prototype.age = 25;
const janek = new Player();
const marta = new User();


janek.constructor


function Citizen(country, citizenship) {
    this.country = country;
    this.citizenship = citizenship;
    // this.changeCitizen = function (citizen) {
    //     this.citizenship = citizen;
    //     console.log(`zmiana za pomocą metody w instacji na  ${this.citizenship}`)
    // } }

}

Citizen.prototype.changeCitizenship = '';

const arr = [4, 5, 6, 7];
Array.prototype.delete = function (index) {
    return this.splice(index, 1)
}


// KLASY

// class Family {
//     constructor(name) {
//         this.name = name;
//         this.addMember = function() {}
//     }
//     addMember() {

//     }
// }

// const nowakowie = new Family()
// const Family2 = function () {

// }

// const kowalscy = new Family2();


class Family {
    constructor(members, ...names) {
        this.members = members;
        this.names = names;
    }

    addMember(newMember) {
        this.names.push(newMember);
        this.members++;
        console.log(`Nowy czlownek rodziny ${newMember}, rodzina liczy ${this.members}`)
    }

    static makeFamily(...members) {
        return members;
    }
}

const kowalscy = new Family(3, 'Jan', "Ola", 'Ewa');

kowalscy.addMember("Jaś");
kowalscy.addMember("Olcia");
kowalscy.addMember("Paulinka");

const kwiatkowscy = new Family(1, "Kamil");


class Animal { } //nie podlega hoistingowi

// Klasy - extends i super

class Animal {
    constructor(age) {
        this.age = age;
    }
    breathe() {
        console.log("Zwierze oddycha");
    }
}

const zwierze = new Animal(2)

class Mammel extends Animal {

}

const ssak = new Mammel();

