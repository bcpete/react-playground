const person = {
  name: 'Brady',
  age: 23,
  location: {
    city: 'Imperial',
    temperature: '60'
  }

}

const {name = 'Anonymous', age} = person;

console.log(`${name} is ${age}`);


// const {city, temperature} = person.location
// if (person.location.city && person.location.temperature){
//   console.log(`its ${temperature} in ${city}`)
// }

const book = {
  title: 'catch 22',
  author: 'me',
  publisher: {
    name: 'penguin'
  }
}

const {name: publisherName = 'self published'} = book.publisher;

console.log(publisherName);

// array destructuring
// use a , to skip an index. [ , city, state, zipe]
const address = ['5463 Lakewood Terrace', 'Imperial', 'Missouri', '63052'];

const [ street, city, state, zip] = address;

console.log(`You are in ${city} ${state}.`)