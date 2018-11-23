import {
  GIVE_CARD_TO_PLAYER,
  GIVE_CARD_TO_DEALER,
} from './constants';

const initialState = {
  playerCards: [],
  dealerCards: []
};

const gameReducer = (state = initialState, action) => {
  switch(action.type) {
    case GIVE_CARD_TO_PLAYER:
      return {
        ...state,
        playerCards: state.playerCards.concat([
          action.card,
        ]),
      };

    case GIVE_CARD_TO_DEALER:
      return {
        ...state,
        dealerCards: state.dealerCards.concat([
          action.card,
        ]),
      };

    default:
      return state;
  }
}

export default gameReducer;
