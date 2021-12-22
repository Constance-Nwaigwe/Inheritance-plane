class Plane {
    constructor(name, passengernum) {
        this.name = name
        this.passengernum = passengernum
        this.passengers = []
        this.crew = []
    }
    addpassengers(pass){
        this.passengers.push(pass);
    }
    addcrew(crew){
        this.crew.push(crew);
    }
}

module.exports = Plane;