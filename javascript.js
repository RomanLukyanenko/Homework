
const obj = {
    from: 1,
    to: 10,
    createArr: function() {
      const arr = [];
      for (let i = this.from; i <= this.to; i++) {
        arr.push(i);
      }
      this.arr = arr;
    }
  };
  
  obj.createArr();
  console.log(obj.arr); 







  const obj1 = {
    from: 1,
    to: 10
  };
  
  const createArr1 = function() {
    const arr1 = [];
    for (let i = this.from; i <= this.to; i++) {
      arr1.push(i);
    }
    this.arr1 = arr1;
  };
  
  const boundedCreateArr = createArr1.bind(obj1);
  boundedCreateArr();
  console.log(obj1.arr1); 







  const obj3 = {
    from: 1,
    to: 10
  };
  
  const createArr3 = function() {
    const arr3 = [];
    for (let i = this.from; i <= this.to; i++) {
      arr3.push(i);
    }
    this.arr3 = arr3;
  };
  
  createArr3.call(obj3);
  console.log(obj3.arr3);













  const calculator = {
    result: 0,
      
    sum: function(value) {
      this.result += value;
      return this;
    },
      
    sub: function(value) {
      this.result -= value;
      return this;
    },
      
    mul: function(value) {
      this.result *= value;
      return this;
    },
  
    div: function(value) {
      this.result /= value;
      return this; 
    }
  };
  
  calculator.sum(2).sum(2).mul(4);
  console.log(calculator.result);









const checkFlush = (cards) => {
    let suits = cards.map(card => card.slice(-1));
    let uniqueSuits = [...new Set(suits)];
    return uniqueSuits.length === 1;
  };
  
  const checkSequence = (cards) => {
    let order = "A2345678910JQK";
    let cardValues = cards.map(card => order.indexOf(card.slice(0, -1))).sort((a, b) => a - b);
  
    let uniqueCardValues = [...new Set(cardValues)];
    if (uniqueCardValues.length !== 5) {
        return false;
    }
  
    if(cardValues.join('') === '01291011') {
        return true;
    }
  
    return cardValues[4] - cardValues[0] === 4;
  };
  
  function Poker(players, names) {
    this.players = players;
    this.names = names;

    let suits = ['♦', '♣', '♥', '♠'];
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  
    let deck = [];
    for (let suit of suits) {
        for (let value of values) {
            deck.push(value + suit);
        }
    }

    deck.sort(() => Math.random() - 0.5);
  
    this.hands = {};
    for (let name of this.names) {
        this.hands[name] = deck.splice(0, 5);
    }
  }
  
  let game = new Poker(2, ["Player1", "Player2"]);
  console.log(game.hands);
  console.log(checkFlush(game.hands["Player1"]));
  console.log(checkSequence(game.hands["Player1"]));
