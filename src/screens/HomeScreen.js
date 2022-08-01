import React from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HomeScreen = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const buttonClickedHandler = () => {
    navigation.navigate('Product');
  };
  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex: 1,
      }}
    >
      <ImageBackground
        source={require('../assets/plant_background.jpg')}
        resizeMode="cover"
        style={styles.IMAGE}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 15,
            paddingTop: 30,
          }}
        >
          <Text style={styles.TEXT_HEADER}>
            Various ornamental plants are here
          </Text>
          <Text style={styles.TEXT_SUBTEXT}>
            Find a variety of ornamental plants that you like here, we have many
            plants that you can choose at will
          </Text>
          <TouchableOpacity
            onPress={buttonClickedHandler}
            style={styles.roundButton1}
          >
            <Icon name="chevron-right" size={8} color="white" />
          </TouchableOpacity>
        </View>
        <View flex={1} />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  IMAGE: {
    flex: 1,
    justifyContent: 'center',
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
  roundButton1: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: '#4DD89F',
  },
});
