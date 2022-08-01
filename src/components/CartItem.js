import React, {useContext, useEffect} from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Box, Badge, Image} from 'native-base';
import {REMOVE_PRODUCT_FROM_CART, ProductContext} from '../context';

export const CartItem = props => {
  const {id, title, price, imageUrl, count, onPressIncrement} = props;
  const {state, dispatch} = useContext(ProductContext);
  useEffect(() => {
    if (count <= 0) {
      dispatch({type: REMOVE_PRODUCT_FROM_CART, payload: {id}});
    }
  }, [count]);
  return (
    <Box
      bg="white"
      borderRadius={20}
      flexDirection="column"
      p={5}
      m={5}
      _text={{
        fontSize: 'md',
        fontWeight: 'bold',
        color: 'black',
      }}
    >
      <View style={{flexDirection: 'row'}}>
        <Image size="xs" source={{uri: imageUrl}} alt="No Preview Image" />
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View>
            <Text>{title}</Text>
            <Text>${price.toFixed(2)}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => onPressIncrement(id, 1)}
              style={styles.roundButton}
            >
              <Icon name="plus" size={8} color="white" />
            </TouchableOpacity>
            <Text style={styles.COUNT_TEXT}>{count}</Text>
            <TouchableOpacity
              onPress={() => onPressIncrement(id, -1)}
              style={styles.roundButton}
            >
              <Icon name="minus" size={6} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Box>
  );
};
const styles = StyleSheet.create({
  COUNT_TEXT: {
    fontWeight: '700',
    marginLeft: 10,
    marginRight: 10,
  },
  TEXT_HEADER: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  TEXT_SUBTEXT: {
    paddingTop: 25,
    paddingBottom: 25,
    textAlign: 'center',
    color: 'darkgray',
    opacity: 0.8,
  },
  roundButton: {
    width: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#4DD89F',
  },
});
