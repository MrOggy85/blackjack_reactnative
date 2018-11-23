import {
  TAKE_CARD,
  STOP,
} from '../screen/Play/constants';

import GameController from './gameController';
let gameController = null;

function gameMiddleware({ dispatch, getState }) {
  return next => action => {
    if (!gameController) {
      gameController = new GameController(dispatch, getState);
    }

    if (action.type === TAKE_CARD) {
      gameController.playerTakesCard();
    }
    if (action.type === STOP) {
      gameController.playerStops();

    }

    next(action);
  }
}

export default gameMiddleware;
