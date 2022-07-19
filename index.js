
let kontostand = 100;
document.querySelector('#kontostand').innerHTML = `${kontostand}€`;

function run() {
      let zahl = Math.floor(Math.random()*6 + 1);
      //document.querySelector('#dice').innerHTML = zahl;
      if (zahl == 6) {
            kontostand = kontostand + 5;
      } else {
            kontostand = kontostand - 1;
      };
      document.querySelector('#kontostand').innerHTML = `${kontostand}€`;
      document.querySelector('#dice').src =`${zahl}.png`;
}

function reset() {
      kontostand = 100;
      document.querySelector('#kontostand').innerHTML = `${kontostand}€`;
      document.querySelector('#dice').src =``;
}

