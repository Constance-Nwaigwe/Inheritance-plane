const Person = require('./person');
const Plane = require('./plane');

describe('', () => {
    const test1 = new Plane('spirt', 236)
    const test2 = new Person.Passenger('name2', 'A15');
    const test3 = new Person.Crew('name3','Pilot');
    test('', () => {
        expect(test1.name).toBe('spirt')
        expect(test1.passengernum).toBe(236)
    })
    test('', () => {
        test1.addpassengers(test2.personname)
        expect(Array.isArray(test1.passengers)).toBeTruthy();
		expect(test1.passengers.length).toBe(1)
		expect(test1.passengers[0]).toBe('name2')
    })
    test('', () => {
        test1.addcrew(test3.personname)
        expect(Array.isArray(test1.crew)).toBeTruthy();
		expect(test1.crew.length).toBe(1)
		expect(test1.crew[0]).toBe('name3')
    })
})
