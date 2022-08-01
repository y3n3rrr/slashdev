/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext, useReducer} from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CartScreen, ProductScreen, HomeScreen} from './screens';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Badge, VStack, Button, NativeBaseProvider} from 'native-base';

import {ProductContext} from './context/ProductContext';
import productReducer from './context/ProductReducer';
import {appColors} from './utils';

const Stack = createNativeStackNavigator();

const App = () => {
  const initialState = useContext(ProductContext);
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <NativeBaseProvider>
      <ProductContext.Provider value={{state, dispatch}}>
        <NavigationContainer>
          <Stack.Navigator
            headerMode={null}
            initialRouteName="Home"
            screenOptions={e => optionsStack(e, state)}
            defaultScreenOptions={{title: null}}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{...optionsStack, headerTitle: 'My Cart'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ProductContext.Provider>
    </NativeBaseProvider>
  );
};

export default App;

const optionsStack = (props, state) => {
  return {
    headerStyle: {
      backgroundColor: appColors.appGreen,
    },
    headerShadowVisible: false, // applied here
    headerBackTitleVisible: false,
    headerTintColor: Platform.OS === 'ios' ? 'black' : appColors.appGreen,
    headerLeft: () => {
      if (props.navigation.canGoBack()) {
        return (
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Icon
              name="chevron-left"
              backgroundColor="transparent"
              color="black"
              size={16}
            />
          </TouchableOpacity>
        );
      }
    },
    headerRight: () => {
      if (props.route.name === 'Product') {
        return (
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Cart');
            }}
            style={{right: 15}}
          >
            <VStack>
              <Badge
                style={{width: 24}}
                bg="red.400"
                colorScheme="danger"
                rounded="full"
                mb={-4}
                mr={-4}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
                _text={{
                  fontSize: 10,
                }}
              >
                {state.ShoppingCart.length}
              </Badge>
              <Button
                mx={{
                  base: 'auto',
                  md: 0,
                }}
                p="2"
                bg="transparent"
                _text={{
                  fontSize: 6,
                  color: 'black',
                }}
              >
                <TouchableWithoutFeedback
                  style={{flexDirection: 'row'}}
                  onPress={() => {
                    debugger;
                    props.navigation.navigate('Cart');
                  }}
                >
                  <Icon
                    name="shopping-cart"
                    backgroundColor="transparent"
                    color="black"
                    size={16}
                  />
                </TouchableWithoutFeedback>
              </Button>
            </VStack>
          </TouchableOpacity>
        );
      }
    },
  };
};
