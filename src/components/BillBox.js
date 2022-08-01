import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {appColors} from '../utils';
import {Box, Text as NText, HStack, Button} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

export const BillBox = props => {
  const {subTotal, deliveryFee, discount, total} = props;
  return (
    <Box
      safeArea
      flex={1}
      bg="white"
      borderRadius={20}
      _text={{
        fontSize: 'md',
        fontWeight: 'bold',
        color: 'black',
      }}
    >
      <View style={{paddingLeft: 30, paddingRight: 30}}>
        <Text style={styles.HEADER_TEXT}>Have a coupon code? Enter here</Text>
        <Box
          justifyContent="center"
          borderWidth={0.2}
          borderColor="gray.400"
          bg="white"
          borderRadius={8}
          flexDirection="column"
          p={4}
          top={5}
          mb={10}
          _text={{
            fontSize: 'md',
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={styles.TEXT_COUPON}>XXZXEWT</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Text style={styles.TEXT_HEADER}>Available </Text>
              <Icon
                name="check-circle"
                size={20}
                color={appColors.plantGreen}
              />
            </View>
          </View>
        </Box>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Text style={styles.PRICE_LABEL}>Sub Total</Text>
            <Text style={styles.PRICE_LABEL}>${subTotal}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              top: 15,
            }}
          >
            <Text style={styles.PRICE_LABEL}>Delivery Fee:</Text>
            <Text style={styles.PRICE_LABEL}>${deliveryFee}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              top: 30,
            }}
          >
            <Text style={styles.PRICE_LABEL}>Discount:</Text>
            <Text style={styles.PRICE_LABEL}>${discount?.toFixed(2)}</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          bottom: 10,
          paddingLeft: 30,
          paddingRight: 30,
        }}
      >
        <Text
          ellipsizeMode="clip"
          numberOfLines={1}
          style={{bottom: 30, color: 'gray'}}
        >
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
          - - - - - - - - - - - - - - - - - - - - - - -
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            bottom: 15,
          }}
        >
          <Text style={styles.PRICE_LABEL}>Total:</Text>
          <Text style={styles.PRICE_LABEL_TOTAL}>${total?.toFixed(2)}</Text>
        </View>
        <TouchableOpacity
          style={{
            borderRadius: 30,
            backgroundColor: '#4DD89F',
            width: '100%',
            paddingLeft: 3,
            paddingRight: 5,
          }}
          onPress={() => {}}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Icon name="check-circle" size={36} color="white" />
            <Text style={{color: 'white', fontWeight: '600'}}>Checkout</Text>
            <Icon
              name="angle-double-right"
              size={16}
              style={{paddingRight: 15, height: 0}}
              color="white"
            />
          </View>
        </TouchableOpacity>
      </View>
    </Box>
  );
};
const styles = StyleSheet.create({
  HEADER_TEXT: {
    fontSize: 14,
    fontWeight: '600',
  },
  TEXT_COUPON: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 15,
  },
  TEXT_HEADER: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    paddingRight: 15,
    color: appColors.plantGreen,
  },
  TEXT_SUBTEXT: {
    paddingTop: 25,
    paddingBottom: 25,
    textAlign: 'center',
    color: 'darkgray',
    opacity: 0.8,
  },
  PRICE_LABEL: {
    fontSize: 15,
    color: 'gray',
  },
  PRICE_LABEL_TOTAL: {
    fontSize: 16,
    fontWeight: '800',
    color: appColors.plantGreen,
  },
});
