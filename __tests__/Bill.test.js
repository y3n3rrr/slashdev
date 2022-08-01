import {renderHook} from '@testing-library/react-hooks';
import {calculateBill} from '../src/hooks/Bill';
import {ProductBox} from '../src/components/ProductBox';
import renderer from 'react-test-renderer';
import {NativeBaseProvider} from 'native-base';

it('Bill calculator', () => {
  const productItems = [
    {id: 1, price: 10},
    {id: 2, price: 20},
    {id: 3, price: 50},
  ];
  const cartItems = [
    {id: 1, count: 1},
    {id: 2, count: 5},
  ];
  const result = calculateBill(cartItems, productItems);
  expect(result).toStrictEqual({
    deliveryFee: 5,
    discount: 50,
    subTotal: 110,
    total: 65,
  });
});

const data = {
  id: 1,
  title: 'title',
  description: 'description',
  price: 12,
  imageUrl: '',
};
it('ProductBox', () => {
  const tree = renderer
    .create(
      <NativeBaseProvider>
        <ProductBox {...data} />
      </NativeBaseProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
