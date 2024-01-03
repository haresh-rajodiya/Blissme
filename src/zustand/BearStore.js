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
