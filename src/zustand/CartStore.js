// import create from 'zustand';

// const useCartStore = create(set => ({
//   cart: [],
//   addToCart: item => set(state => ({cart: [...state.cart, item]})),
//   removeFromCart: itemId =>
//     set(state => ({cart: state.cart.filter(item => item.id !== itemId)})),
// }));

// export default useCartStore;

//=================================================================================

// import { MMKV } from 'react-native-mmkv';
// const useCartStore = create((set) => ({
//   cart: MMKV.getString('cart') ? JSON.parse(MMKV.getString('cart')) : [],
//   addToCart: (item) => set((state) => {
//     const updatedCart = [...state.cart, item];
//     MMKV.setString('cart', JSON.stringify(updatedCart));
//     return { cart: updatedCart };
//   }),
//   removeFromCart: (itemId) => set((state) => {
//     const updatedCart = state.cart.filter((item) => item.id !== itemId);
//     MMKV.setString('cart', JSON.stringify(updatedCart));
//     return { cart: updatedCart };
//   }),
// }));
// export default useCartStore;

//=================================================================================

import {create} from 'zustand';
import {OurProductListData} from '../helper/dummyData';
// import {Product} from './Interface';

// const CartState = () => {
//   (products = [OurProductListData & {quantity: ''}]),
//     (addProduct = (products = OurProductListData) => ''),
//     (reduceProduct = (products = OurProductListData) => ''),
//     (clearCart = () => '');
// };

const CartState = () => {
  (products = [OurProductListData & {quantity: ''}]),
    (addProduct = (products = OurProductListData) => ''),
    (reduceProduct = (products = OurProductListData) => ''),
    (clearCart = () => '');
};
const useCartStore = CartState(set => ({
  Product: [],
  item: 0,
  addProduct: (products = OurProductListData) =>
    set(state => {
      state.item++;
      const hasProduct = state.products.find(p.id === products.id);
      if (hasProduct) {
        return {
          products: state.products.map(p => {
            if (p.id === products.id) {
              return {...p, quantity: p.quantity + 1};
            }
          }),
        };
      } else {
        return {
          products: [...state.products, {...products, quantity: 1}],
        };
      }
    }),
  reduceProduct: (products = OurProductListData) =>
    set(state => {
      return {
        products: state.products
          .map(p => {
            if (p.id === products.id) {
              state.items--;
              return {...p, quantity: p.quantity - 1};
            }
            return p;
          })
          .filter(p => p.quantity > 0),
      };
    }),
  clearCart: () =>
    set(state => {
      return {
        items: 0,
        products: [],
      };
    }),
}));

export default useCartStore;
