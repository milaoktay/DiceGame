
let kontostand = 100;
document.querySelector('#kontostand').innerHTML = `${kontostand}€`;
let zahl;
let zahl2;
let zahl3;
let called = false;

function run() {
      zahl = Math.floor(Math.random()*6 + 1);
      zahl2 = Math.floor(Math.random()*6 + 1);
      zahl3 = Math.floor(Math.random()*6 + 1);
      //document.querySelector('#dice').innerHTML = zahl;
      if (zahl == 6) {
            kontostand = kontostand + 5;
      } else {
            kontostand = kontostand - 1;
      };
      
      document.querySelector('#dice').src =`${zahl}.png`;
      
      if (called == true) {
            document.querySelector('.roll2').src =`${zahl2}.png`;
            document.querySelector('.roll3').src =`${zahl3}.png`;
            if (zahl == 6 && zahl2 == 6 && zahl3 == 6) {
                  document.querySelector('#platzhalter').innerHTML = 'Du hast 200€ gewonnen!';
                  kontostand = kontostand + 200;
            } 
      } 
      document.querySelector('#kontostand').innerHTML = `${kontostand}€`;
}

function reset() {
      kontostand = 100;
      document.querySelector('#kontostand').innerHTML = `${kontostand}€`;
      document.querySelector('#dice').src =``;
}

let wurf2 = document.createElement('img');
let wurf3 = document.createElement('img');

function stepUp () {
      wurf2.classList.add('roll2');
      wurf3.classList.add('roll3');
      document.querySelector('#container2').appendChild(wurf2);
      document.querySelector('#container2').appendChild(wurf3);
      called = true;
      reset();
}
