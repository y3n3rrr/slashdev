import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Badge, Image} from 'native-base';
import {appColors} from '../utils';

export const ProductBox = props => {
  const {id, title, description, price, imageUrl} = props;
  return (
    <View style={{flexDirection: 'row', padding: 15}} key={`Product_${id}`}>
      <Image size="sm" source={{uri: imageUrl}} alt="No Preview Image" />
      <View style={styles.CONTAINER}>
        <View>
          <Text style={styles.TITLE}>{title}</Text>
          <Text style={styles.SUBTEXT}>{description}</Text>
        </View>
        <Badge
          style={{borderRadius: 24, backgroundColor: appColors.plantGreen}}
          _text={{
            color: 'white',
            fontWeight: '700',
          }}
        >
          {`$${price.toFixed(2)}`}
        </Badge>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  CONTAINER: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 10,
  },
  IMAGE: {
    flex: 1,
    justifyContent: 'center',
  },
  TITLE: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  SUBTEXT: {
    color: 'darkgray',
    opacity: 0.9,
    fontSize: 12,
  },
});
