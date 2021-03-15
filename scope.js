
if(true) {
    let a = 0;
    const b = 1;
    var c = 2;
}

console.log(c); //2
console.log(a); //erro
console.log(b); //erro

//------

function muda() {
    var b = 1
    console.log(i)
  
    return function checab() {
      console.log(b)
    }
    
  }
  
  const i = 0;
  h = muda();
  console.log(h)
  h()

  //------

  //closure e hoisting

  var x = 23;

(function(){
  var x = 43;
  (function random(){
    console.log(x)
    x++;
    console.log(x);
    var x = 21;
  })();
})(); //undefined e NaN, pois estou IIFE

console.log('tal')
function tal() {
  var y = 1;

  function fulano() {
    console.log(y);
  }

  fulano()
  console.log(y)
}

//tem acesso ao y graças ao closure
tal();//1 e 1

function bla() {
  let i = 0;

  if(true) {
    console.log(i)
  }
}

//tem acesso ao i graças ao closure
bla()

