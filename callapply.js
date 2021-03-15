var Person = {
    getName: function() {
        
        return this.name;
    },
    
    getLastname: function () {
        return this.lastname;
    },

    //arrows functions com call/bind não vai funcionar! Pois o conexto não muda, mesmo com call.
    getId: () => {
        return this.id;
    }
}

var Larissa = {
    name: 'Larissa', 
    lastname: 'Galeno', 
    getId: '111111', 
}

var Arthur = {
    name: 'Arthur', 
    lastaname: 'Sasse', 
    getId: '000000'
}


//Usando bind para fazer uma cópia da função
//let getName = Person.getName.bind(Larissa)
//console.log(getName())

//chamando por meio do call
console.log(Person.getName.call(Larissa));


//questão 4 https://www.sitepoint.com/5-typical-javascript-interview-exercises/

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname.bind(obj.prop);

console.log(test());


//-------

let hero = {
    powerLevel: 99,
    getPower(){
        console.log(this)
        return this.powerLevel;
    }
}
  
let getPower = hero.getPower.bind(hero);
//console.log(getPower);
console.log(getPower())

let hero2 = {powerLevel:42};
//console.log(hero.getPower());
//console.log(getPower.apply(hero2));

var hero3 = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
  };
  
  var stoleSecretIdentity = hero3.getSecretIdentity;
  console.log(stoleSecretIdentity);
  
  console.log(stoleSecretIdentity.call(hero3));
  console.log(hero3.getSecretIdentity());
