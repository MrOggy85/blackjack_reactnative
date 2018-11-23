import {
  giveCardToPlayer,
  giveCardToDealer,
} from '../screen/Play/actions';

const SUIT = [
  'C',
  'D',
  'H',
  'S',
];

const RANK = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];

const GAME_STATE = {
  PLAYER_TURN: 'PLAYER_TURN',
  DEALER_TURN: 'DEALER_TURN',
  GAME_OVER: 'GAME_OVER',
}

// let deck = [];

function fillDeck() {
  const deck = [];
  for (var rank = 0; rank < 13; rank++) {
    for (var suit = 0; suit < 4; suit++) {
      const card = `${RANK[rank]}${SUIT[suit]}`;
      deck.push(card);
    }
  }

  return deck;
}

function takeCard(deck) {
  var index = Math.floor(Math.random() * deck.length);
  const card = deck.splice(index, 1)[0];

  return card;
}

function getCardValue(card) {
  const rank = card.substr(0, 1);

  switch (rank) {
    case '1': // 10
    case 'J':
    case 'Q':
    case 'K':
      return [10];

    case 'A':
      return [1, 11];

    default:
      return [Number(rank)];
  }
}

function getHandValue(cards) {
  let handValue = [0, 0];

  cards.forEach(card => {
    const cardValue = getCardValue(card);
    if (cardValue.length === 2) {
      handValue[0] += cardValue[0];
      handValue[1] += cardValue[1];
    } else {
      handValue[0] += cardValue[0];
      handValue[1] += cardValue[0];
    }
  });

  if (handValue[1] > 21) {
    handValue[1] = handValue[0];
  }

  return handValue;
}

function dealerTakeCard(dispatch, getState) {
  const card = takeCard(this.deck);

  console.log('dealers card', card);
  dispatch(giveCardToDealer(card));

  const dealerCards = getState().game.dealerCards;
  const handValue = getHandValue(dealerCards);
  console.log('dealer handValue', handValue);

  if (handValue[1] >= 17) {
    console.log('dealer stops');
    this.gameState = GAME_STATE.GAME_OVER;
  } else {
    setTimeout(() => {
      dealerTakeCard(dispatch, getState);
    }, 2000);
  }
}

function playerStops() {
  this.gameState = GAME_STATE.DEALER_TURN;

  setTimeout(() => {
    dealerTakeCard(this.dispatch, this.getState);
  }, 1000);
}

function playerTakesCard() {
  const card = takeCard(this.deck);
  this.dispatch(giveCardToPlayer(card));

  const playerCards = this.getState().game.playerCards;
  const handValue = getHandValue(playerCards);
  console.log('player handValue', handValue);

  if (handValue[1] > 21) {
    console.log('player is bust');
    this.gameState = GAME_STATE.GAME_OVER;
  }
}

function newGame() {
  this.deck = fillDeck();

  this.gameState = GAME_STATE.PLAYER_TURN;
}

function GameController(dispatch, getState) {
  this.dispatch = dispatch;
  this.getState = getState;
  this.gameState = GAME_STATE.GAME_OVER;
  this.deck = fillDeck();
}

GameController.prototype.playerTakesCard = playerTakesCard;
GameController.prototype.playerStops = playerStops;
GameController.prototype.newGame = newGame;

export default GameController;
