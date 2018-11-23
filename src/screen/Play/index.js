import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

import Card from '../../components/Card';
import GestureRecognizer from '../../components/GestureRecognizer';

import {
  takeCard,
  stop,
} from './actions';

let taps = 0;

const Play = (props) => {
  return (
      <GestureRecognizer
        onSwipe={(direction) => {
          if (direction === 'SWIPE_RIGHT' || direction === 'SWIPE_LEFT') {
            props.stop();
          }
        }}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            taps += 1;
            if (taps > 1) {
              props.takeCard();
              taps = 0;
            }
            setTimeout(() => {
              taps = 0;
            }, 1000);
          }}
        >
        <View
          style={{
            flex: 1,
          }}
        >
          <Text>Welcome to BlackJack!</Text>

          <View
            style={{
              flex: 1,
            }}
          >
            <Text>Dealer</Text>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              {props.dealerCards.map(card => (
                <Card
                  key={`dealer-card-${card}`}
                  value={card}
                />
              ))}
            </View>
          </View>

          <View
            style={{
              flex: 1,
            }}
          >
            <Text>Player</Text>
            <View
              style={{
                flexDirection: 'row',
              }}
            >
              {props.playerCards.map(card => (
                <Card
                  key={`player-card-${card}`}
                  value={card}
                />
              ))}
            </View>
          </View>

        </View>

    </TouchableWithoutFeedback>
    </GestureRecognizer>
  );
}

Play.propTypes = {
  playerCards: PropTypes.array.isRequired,
  dealerCards: PropTypes.array.isRequired,

  takeCard: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    playerCards: state.game.playerCards,
    dealerCards: state.game.dealerCards,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    takeCard: () => {
      dispatch(takeCard())
    },
    stop: () => {
      dispatch(stop())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);
