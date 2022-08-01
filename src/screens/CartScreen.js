import React, {useContext, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {CartItem, BillBox} from '../components';
import {
  INCREMENT_PRODUCT_CART,
  REMOVE_PRODUCT_FROM_CART,
  ProductContext,
} from '../context';
import {Box, Text as NText, HStack, Button} from 'native-base';
import {appColors} from '../utils';
import Icon from 'react-native-vector-icons/FontAwesome';
import useBillCalculator from '../hooks/Bill';
import {SwipeListView} from 'react-native-swipe-list-view';

const screenWidth = Dimensions.get('window').width;
export const CartScreen = props => {
  const {state, dispatch} = useContext(ProductContext);

  const [bill, getBill] = useBillCalculator();

  useEffect(() => {
    getBill();
  }, [state]);

  const renderItemsInCart = item => {
    const productItem = state.Products.filter(f => f.id === item.id)[0];
    debugger;
    return (
      <View key={`Item_${item.id}`}>
        <CartItem
          onPressIncrement={Increment}
          {...productItem}
          count={item.count}
        />
      </View>
    );
  };

  const Increment = (id, incrementVal) => {
    dispatch({type: INCREMENT_PRODUCT_CART, payload: {id, incrementVal}});
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: appColors.appGreen,
      }}
    >
      <View
        style={{
          flex: 1,
        }}
      >
        <Box flex="1">
          <SwipeListView
            data={state.ShoppingCart}
            renderItem={({item}, rowMap) => renderItemsInCart(item)}
            renderHiddenItem={({item}, rowMap) => (
              <HStack flex="1" pl="6">
                <TouchableOpacity
                  onPress={() => {
                    dispatch({
                      type: REMOVE_PRODUCT_FROM_CART,
                      payload: {id: item.id},
                    });
                  }}
                  style={{
                    width: 75,
                    borderRadius: 24,
                    backgroundColor: '#FFD2D5',
                    marginTop: 25,
                    marginBottom: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: 0.8,
                  }}
                >
                  <Icon name="trash" color="red" size={24} />
                </TouchableOpacity>
              </HStack>
            )}
            leftOpenValue={80}
            previewRowKey={'0'}
            previewOpenValue={-40}
            previewOpenDelay={3000}
            onRowDidOpen={() => {}}
          />
        </Box>
      </View>
      <BillBox {...bill} />
    </View>
  );
};
