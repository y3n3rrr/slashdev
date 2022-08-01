import React, {useContext, useEffect, useState} from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {
  Image,
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
} from 'native-base';
import {BottomModal, ProductBox, FormModal} from '../components';
import {ProductContext} from '../context/ProductContext';
import {ADD_PRODUCT_TO_CART, ADD_NEW_PRODUCT} from '../context';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ProductScreen = ({navigation}) => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const {state, dispatch} = useContext(ProductContext);

  const onPressProduct = product => {
    setSelectedItem(product);
    setShowModal(true);
  };

  const handleAddClick = () => {
    dispatch({type: ADD_PRODUCT_TO_CART, payload: selectedItem});
    setShowModal(false);
  };

  const onSubmit = data => {
    debugger;
    const newItemId = state.Products[state.Products.length - 1].id + 1;
    dispatch({
      type: ADD_NEW_PRODUCT,
      payload: {
        ...data,
        price: Number(data.price),
        id: newItemId,
      },
    });
  };

  useEffect(() => {
    console.log(`state`, state);
  }, [state]);
  return (
    <ImageBackground
      source={require('../assets/plant_background.jpg')}
      resizeMode="cover"
      style={styles.IMAGE}
    >
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          ListHeaderComponent={
            <View
              style={{
                alignItems: 'center',
                paddingTop: 30,
                paddingBottom: 10,
              }}
            >
              <Button
                width="5/6"
                style={{borderRadius: 30, backgroundColor: '#4DD89F'}}
                primary
                onPress={() => setShowFormModal(true)}
                leftIcon={<Icon name="plus" size={12} color="white" />}
              >
                <Text style={{color: 'white'}}> Add New Product </Text>
              </Button>
            </View>
          }
          data={state.Products}
          renderItem={(item, i) => {
            return (
              <TouchableOpacity
                style={{marginBottom: 20}}
                onPress={() => onPressProduct(item.item)}
              >
                <ProductBox {...item.item} />
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
      <BottomModal
        visible={showModal}
        onR
        onDismiss={() => setShowModal(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            marginBottom: 30,
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              width: `80%`,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Image
              style={{right: 10}}
              source={{uri: selectedItem.imageUrl}}
              alt="No Preview Image"
              size="sm"
            />
            <Text
              style={{
                color: '#4DD89F',
                fontWeight: 'bold',
                fontSize: 16,
              }}
            >
              ${selectedItem?.price?.toFixed(2)}
            </Text>
          </View>
          <Button
            width="5/6"
            style={{borderRadius: 30, backgroundColor: '#4DD89F'}}
            primary
            onPress={() => handleAddClick()}
          >
            <Text style={{color: 'white'}}> Add to Card </Text>
          </Button>
        </View>
      </BottomModal>
      <FormModal
        visible={showFormModal}
        onSubmit={onSubmit}
        onDismiss={() => setShowFormModal(false)}
      />
    </ImageBackground>
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
