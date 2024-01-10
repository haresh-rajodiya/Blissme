// import {create} from 'zustand';
// import {useShallow} from 'zustand/react/shallow';

// // const nuts = useBearStore(state => state.nuts);
// // const honey = useBearStore(state => state.honey);
// const useBearStore = create(set => ({
//   bears: 0,
//   increasePopulation: () => set(state => ({bears: state.bears + 1})),
//   removeAllBears: () => set({bears: 0}),
// }));

// const {nuts, honey} = useBearStore(
//   useShallow(state => ({nuts: state.nuts, honey: state.honey})),
// );

// const [nuts, honey] = useBearStore(
//   useShallow(state => [state.nuts, state.honey]),
// );

// const treats = useBearStore(useShallow(state => Object.keys(state.treats)));

// import create from  'zustand';
// import zustandFlipper from 'react-native-flipper-zustand';

// type BearStoreT = {
// 	bears: number;
// 	increasePopulation: () => void;
// 	removeAllBears:  () => void;
// }

// const useStore = create<BearStoreT>()(
// 	zustandFlipper(set => ({
// 	  bears: 0,
// 	  // "set" now receives as the third parameter, the name of an action that will be shown in Flipper
// 	  increasePopulation: () => set(state => ({ bears: state.bears + 1 }), false, 'increasePopulation'),
// 	  removeAllBears: () => set({ bears: 0 }, false, 'removeAllBears')
// 	}))
// );

// =========================================================================================

// Create Zustand Store: Set up a Zustand store to manage the cart state. For example:// cartStore.js
// import create from 'zustand';
// const useCartStore = create((set) => ({
//   cart: [],
//   addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
//   removeFromCart: (itemId) => set((state) => ({ cart: state.cart.filter((item) => item.id !== itemId) })),
// }));
// export default useCartStore;
// Implement Cart Screen: Create a screen where users can view and interact with the cart.
//Use the Zustand store to manage the cart state.Integrate MMKV for Storage: Initialize MMKV in your app,
//and use it to persist the cart state. For example:// App.js
// import React, { useEffect } from 'react';
// import { MMKV } from 'react-native-mmkv';
// import { Provider as StoreProvider } from 'use-cart-store'; // Import your Zustand store provider
// const App = () => {
//   useEffect(() => {
//     // Load cart state from MMKV on app start
//     const storedCart = MMKV.getString('cart');
//     if (storedCart) {
//       useCartStore.setState({ cart: JSON.parse(storedCart) });
//     }
//   }, []);
//   return (
//     <StoreProvider>
//       {/* Your app components */}
//     </StoreProvider>
//   );
// };
// export default App;
//Persist State Changes: Update your Zustand store actions to also update the MMKV storage when the cart changes.// cartStore.js
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
//This example provides a basic structure for managing a shopping cart in a React Native app using Zustand
//for state management and MMKV for local storage. Remember to adjust the code based on your specific app requirements.
