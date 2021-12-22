const Person = require('./person');

describe('Check if person, crew and passenger class is working', () => {
    const test1 = new Person.Person('name1');
    const test2 = new Person.Passenger('name2', 'A15');
    const test3 = new Person.Crew('name3','Pilot');
    test('test person class', () => {
        expect(test1.personname).toBe('name1')
    })
    test('test Passenger class', () => {
        expect(test2.personname).toBe('name2')
        expect(test2.ticketnum).toBe('A15')
    })
    test('test crew class', () => {
        expect(test3.personname).toBe('name3')
        expect(test3.jobtitle).toBe('Pilot')
    })
})