
// adventurer.inventory[0] // sword
// adventurer.inventory[1] // potion
// adventurer.inventory[2] // artifact

// for (i = 0; i < inventory.length; i++) {
// console.log(adventurer.inventory[0]);
// };


// Now we have a method for “dice rolls,” a common way to handle outcomes in adventuring games. 
// Test this method by calling adventurer.roll() a few times.
// What if we had many adventurers? As you can imagine, 
// creating several of these objects manually would be time consuming, inefficient, 
// and prone to errors. Next, we will level up our approach using Classes.

// const adventurer = {
//     name: "Robin",
//     health: 10,
//     inventory: ["sword", "potion", "artifact"], 
//     diceRolls (mod = 0) {
//         const result = Math.floor(Math.random() * 3) + 1 + mod;
//         console.log(`${this.name} rolled a ${result}.`)
//     },
//     companion: {
//         name: "Leo",
//         type: "Cat",
//             companion2: {
//             name: "Frank",
//             type: "Flea",
//             belongings: ["small hat", "sunglasses"]
//             }
//         }
   
//     adventurer.diceRolls();

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }

  roll() {
    return Math.floor(Math.random() * 6) + 1; 
  };
};


  class Companion extends Character {
        constructor(name, type) {
          super(name);
          this.type = type;
        }
      }

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];

robin.companion = new Companion("Leo");

robin.companion.companion = new Companion("Frank");
robin.companion.companion.inventory = ["small hat", "sunglasses"];


console.log(robin.roll());
console.log(robin.companion.roll()); 
console.log(robin.companion.companion.roll()); 






// class Adventurer extends Character {
//     constructor (name, role) {
//       super(name);
//       // Adventurers have specialized roles.
//       this.role = role;
//       // Every adventurer starts with a bed and 50 gold coins.
//       this.inventory.push("bedroll", "50 gold coins");
//     }
//     // Adventurers have the ability to scout ahead of them.
//     scout () {
//       console.log(`${this.name} is scouting ahead...`);
//       super.roll();
//     }
//   }

  class Adventurer extends Character {
    constructor (name, role) {
      super(name);
       this.role = role;
    this.hiking = 0;
      this.inventory.push("bedroll", "50 gold coins");
    }
   
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }

    hikingTrips(trips) {
        this.hiking += trips;
        console.log(`${this.name} has taken ${trips} hiking trips.`); 
    }
  }

  new Adventurer("Robin");
  robin.inventory.push("sword", "potion", "artifact");

  robin.companion = new Companion("Leo", "cat", 2);
  robin.companion.companion = new Companion("Frank", "flea", 1);
  robin.companion.companion.inventory.push("small hat", "sunglasses");

//   Using static properties and methods, you can create uniform attributes for the class itself rather than instances of the class. Static properties are typically constant values that can be used elsewhere for reference, or utility methods that do not rely on the values of a specific class instance.
// Using the static keyword:
// Add a static MAX_HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.
// Are there other static properties or methods that make sense to add to these classes?

class Character {
    static MAX_HEALTH = 100;


    constructor(name) {
        this.name(name);
        this.health = Character.MAX_HEALTH;
        this.inventory = [];
    };
        roll() {
            return Math.floor(Math.random() * 6) + 1; 
          };
    
}



class Adventure extends Character {
    duel(opponent) {

    
    while(this.health >= 50 && opponent.health >= 50) {
        let thisRoll = this.roll();
        let opponentRoll = opponent.roll();

        if (thisRoll > opponentRoll) {
            opponent.health = -1;
            console.log(`${this.nane} won this round. ${this.nane} rolls ${this.role}  vs ${opponent.nane} rolls ${opponent.rolls}.`);
        } else if (thisRoll < opponentRoll) {
            this.health  = -1;
            console.log(`${opponent.nane} won this round. ${opponent.nane} rolls ${opponent.rolls} vs ${this.nane} rolls ${this.role}.`);
        }  else {
            console.log(`It's a drawl.`)
        };
    }   
    }
};

// class AdventurerFactory {  
//   constructor (role) {
//     this.role = role;
//     this.adventurers = [];
//   }
//   generate (name) {
//     const newAdventurer = new Adventurer(name, this.role);
//     this.adventurers.push(newAdventurer);
//   }
//   findByIndex (index) {
//     return this.adventurers[index];
//   }
//   findByName (name) {
//     return this.adventurers.find((a) => a.name === name);
//   }
// }

// const healers = new AdventurerFactory("Healer");
// const robin = healers.generate("Robin");


// Sure! Let's build on your existing Adventurer class and add the duel() method. I'll also include some ideas for additional properties and methods for various roles.

// Part 6: Developing Skills
// First, let’s implement the duel() method in the Adventurer class:




    const winner = this.health > 50 ? this : opponent;
    console.log(`${winner.name} wins the duel!`);

class Healer extends Adventurer {
  heal(a) {
    const healAmount = 10;
    a.health = a.health + healAmount;
    console.log(`${this.name} heals ${a.name} for ${healAmount}.`);
  }
};

class Fighter extends Adventurer {
 attacker(e) {
    const strikes = this.roll() * 5;
    e.health = e.health + strikes;
    console.log(`${this.name} attacks ${e.name} for ${strikes}.`);
  }
};

class Wizard extends Adventurer {
 wizard(z) {
    const spell = 5;
    z.health = a.health + spell;
    console.log(`${this.name} casts spells on ${z.name} for ${spell}.`);
  }
};

class Champion extends Adventurer {
  champ(b) {
    const spar = 5;
    b.health = b.health + spar;
    console.log(`${this.name} sparss ${b.name}.`);
  }
};

class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  
  }

  playGame(name) {
    let adventurer;
    switch (this.role) {
      case "Healer":
        adventurer = new Healer(name, this.role);
        break;
      case "Fighter":
        adventurer = new Fighter(name, this.role);
        break;
      case "Wizard":
        adventurer = new Wizard(name, this.role);
        break;
      case "Companion":
        adventurer = new Champion(name, this.role);
        break;
      default:
        throw new Error("Unknown role");
    }
    this.adventurers.push(adventurer);
    return adventurer;
  }
  };

//   findByIndex(index) {
//     return this.adventurers[index];
//   }

//   findByName(name) {
//     return this.adventurers.find((a) => a.name === name);
//   }
// }

 
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");
  const autumn = healers.generate("Autumn");
  
  const fighters = new AdventurerFactory("Fighter");
  const eirasen = fighters.generate("Eirasen");
  
  const wizards = new AdventurerFactory("Wizard");
  const zerick = wizards.generate("Zerick");

  const champion = new AdventurerFactory('Champion');
  const beyonce = new AdventurerFactory('Beyonce');
  
  robin.duel(autumn);
  merlin.spell(autumn);
  althea.heal(autumn);