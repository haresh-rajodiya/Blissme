import {create} from 'zustand';

const useStore = create(set => ({
  count: 1,
  inc: () => set(state => ({count: state.count + 1})),
  dic: () => set(state => ({count: state.count - 1})),
}));
const useBearStore = create(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}));

export default useStore;
