import './connection';
import './schema';

const dogs = [
  {name: "Sparky", age: 1},
  {name: "Spot", age: 2},
  {name: "Rover", age: 3},
  {name: "Beethoven", age: 4},
  {name: "Bud", age: 5},
  {name: "Charlie", age: 6},
  {name: "Cuddles", age: 8},
  {name: "Meatball", age: 9},
  {name: "Angel", age: 10},

]
//ADD DATA TO DATABASE, CREATE FUNCTION TO USE ASYNC AWAIT

const createData = async () => {
    try{
        const createdDogs = await Dog.create(dogs)
        console.log(createdDogs)
    }catch(err){
        console.log(error)
    }
}

//Invoke Function
createData()

// Our Query Function
const query = async () => {
    const results = await Dog.find({}) // Find all dogs
    console.log(results)
}

//Invoke query function
query()