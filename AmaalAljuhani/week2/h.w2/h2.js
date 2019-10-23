var streetNumber = ['12222', '13333', '14444', '15555', '16666', '177777']

var streetName = ['A street', 'B street', 'C street', 'D street', 'E street', 'F street',]

var cityName = ['Riyadh', 'Maddena', 'Qasiem', 'Tabouk', 'Makka', 'Dammam', 'Jeddah']

var stateName = ['Qassem State', 'North State', 'East State', 'South State', 'West State']

var zipCode = ['88888', '99999', '10101', '11111', '121212', '131313']

function getRandom(input) {
    return input[Math.floor((Math.random() * input.length))];
}

function createAdress() {
    return `${getRandom(streetNumber)} ${getRandom(streetName)} ${getRandom(cityName)} ${getRandom(stateName)} ${getRandom(zipCode)}`;
}

var address = createAdress();
console.log(address);