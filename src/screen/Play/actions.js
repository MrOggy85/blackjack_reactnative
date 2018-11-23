import {
  TAKE_CARD,
  STOP,
  GIVE_CARD_TO_PLAYER,
  GIVE_CARD_TO_DEALER,
} from './constants';

export function takeCard() {
  return {
    type: TAKE_CARD,
  };
}

export function stop() {
  return {
    type: STOP,
  };
}

export function giveCardToPlayer(card) {
  return {
    type: GIVE_CARD_TO_PLAYER,
    card,
  };
}

export function giveCardToDealer(card) {
  return {
    type: GIVE_CARD_TO_DEALER,
    card,
  };
}
