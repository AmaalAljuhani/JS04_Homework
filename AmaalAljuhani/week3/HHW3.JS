
  let monkey1 ={
name:"chimp",
species:"chimpanzee",
foodsEaten:"honey",
eatSomething:function(){
    console.log("I am "+this.name+"."+ "I am part of the "+ this.species+ " species,"+" and have eaten "+ this.foodsEaten);
}

  }

  monkey1.eatSomething();
  let monkey2 ={
    name:"gibb",
    species:"gibbon",
    foodsEaten:"apple",
    eatSomething:function(){
        console.log("I am "+this.name+"."+ "I am part of the "+ this.species+ " species,"+" and have eaten "+ this.foodsEaten);
    }
    
      }
    
      monkey2.eatSomething();

      let monkey3 ={
        name:"babo",
        species:"babbon",
        foodsEaten:"banana",
        eatSomething:function(){
            console.log("I am "+this.name+"."+ "I am part of the "+ this.species+ " species,"+" and have eaten "+ this.foodsEaten);
        }
        
          }
        
          monkey3.eatSomething();