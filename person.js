class Person {
    constructor(personname) {
        this.personname = personname
        this.bags = []
    }
    addbags(bagtag){
        this.bags.push(bagtag);
    }
}

class Passenger extends Person{
    constructor(personname, ticketnum) {
        super(personname)
        this.ticketnum = ticketnum
    }
}

class Crew extends Person{
    constructor(personname, jobtitle) {
        super(personname)
        this.jobtitle = jobtitle
    }
}

const test1 = new Person('name1');
const test2 = new Passenger('name2', 'A15');
const test3 = new Crew('name3','Pilot');
console.log(test1);
console.log(test2);
console.log(test3);

module.exports = { Person, Passenger, Crew };