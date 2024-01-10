// import {create} from 'zustand';

// const useStore = create(set => ({
//   count: 1,
//   inc: () => set(state => ({count: state.count + 1})),
//   dic: () => set(state => ({count: state.count - 1})),
// }));
// const useBearStore = create(set => ({
//   bears: 0,
//   increasePopulation: () => set(state => ({bears: state.bears + 1})),
//   removeAllBears: () => set({bears: 0}),
// }));

// export default useStore;

// import create from 'zustand';
// import {View, Text, Button} from 'react-native';

// const useCountStore = create(set => ({
//   count: 0,
//   increment: () => set(state => ({count: state.count + 1})),
//   decrement: () => set(state => ({count: state.count - 1})),
// }));

// function Counter() {
//   const count = useCountStore(state => state.count);
//   const increment = useCountStore(state => state.increment);
//   const decrement = useCountStore(state => state.decrement);

//   return (
//     <View>
//       <Text> {count}</Text>
//       <Button onClick={increment}>{'+'}</Button>
//       <Button onClick={decrement}>{'-'}</Button>
//     </View>
//   );
// }
