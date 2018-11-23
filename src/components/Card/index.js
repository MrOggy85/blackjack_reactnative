import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
} from 'react-native';

import cards from '../../resources/cards';

const Card = (props) => {
  const {
    value,
  } = props;

  const image = cards[value];

  return (
    <View>
      <Text>{value}</Text>
      <Image
        source={image}
        style={{ width: 40, height: 60 }}
      />
    </View>
  );
}

Card.propTypes = {
  value: PropTypes.string.isRequired,
}

export default Card;
