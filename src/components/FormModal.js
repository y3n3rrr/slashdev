// original source: https://medium.com/@ndyhrdy/making-the-bottom-sheet-modal-using-react-native-e226a30bed13 🙇
import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';
import {
  Image,
  Button,
  Modal,
  Stack,
  FormControl,
  Input,
  Center,
} from 'native-base';
import {useForm, Controller} from 'react-hook-form';
import {SSRProvider} from '@react-aria/ssr';
import {appColors} from '../utils';
export const FormModal = props => {
  const {visible, onDismiss, onSubmit} = props;
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm();

  return (
    <Modal
      isOpen={visible}
      onClose={onDismiss}
      safeAreaTop={true}
      avoidKeyboard
    >
      <Modal.Content maxWidth="350">
        <Modal.CloseButton onPress={onDismiss} />
        <Modal.Header>Add New Product</Modal.Header>
        <Modal.Body>
          <SSRProvider>
            <FormControl isRequired>
              <FormControl.Label>Title</FormControl.Label>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    onBlur={onBlur}
                    placeholder="Enter Title"
                    onChangeText={val => onChange(val)}
                    value={value}
                  />
                )}
                name="title"
                rules={{
                  required: 'Title is required',
                  minLength: {
                    value: 3,
                    message: 'Title should be at least 3 character',
                  },
                }}
                defaultValue=""
              />
              {errors?.title?.message && (
                <Text style={styles.ERROR_TEXT}>{errors?.title?.message}</Text>
              )}
            </FormControl>
            <FormControl mt="3" isRequired>
              <FormControl.Label>Price</FormControl.Label>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    value={value}
                    onBlur={onBlur}
                    placeholder="Enter Price"
                    keyboardType="numeric"
                    onChangeText={val => {
                      if (!isNaN(val)) {
                        onChange(val);
                      }
                    }}
                  />
                )}
                name="price"
                rules={{
                  required: 'Price is required',
                  min: {
                    value: 0.000001,
                    message: 'Enter valid price value',
                  },
                }}
                defaultValue=""
              />
              {errors?.price?.message && (
                <Text style={styles.ERROR_TEXT}>{errors?.price?.message}</Text>
              )}
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Description</FormControl.Label>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={val => onChange(val)}
                    value={value}
                  />
                )}
                name="description"
                defaultValue=""
              />
            </FormControl>
            <FormControl mt="3">
              <FormControl.Label>Image Url</FormControl.Label>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <Input
                    onBlur={onBlur}
                    onChangeText={val => onChange(val)}
                    value={value}
                  />
                )}
                name="imageUrl"
                defaultValue=""
              />
            </FormControl>
          </SSRProvider>
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={onDismiss}>
              Cancel
            </Button>
            <Button
              onPress={handleSubmit(formValues => {
                onSubmit(formValues);
                onDismiss();
                reset();
              })}
            >
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ERROR_TEXT: {
    top: 5,
    fontSize: 12,
    color: appColors.errorTextColor,
  },
});
