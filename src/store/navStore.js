import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useNavStore = create(persist(
  (set) => ({
    currentHeaderNavId: '',
    currentGoodsParentId: 'all',
    currentGoodsId: '',
    setCurrentHeaderNavId: (newId) => set((state) => ({ currentHeaderNavId: newId })),
    setCurrentGoodsParentId: (newId) => set(() => ({ currentGoodsParentId: newId })),
    setCurrentGoodsId: (newId) => set(() => ({ currentGoodsId: newId })),
  }),
  {
    name: 'nav',
    getStorege: () => localStorage
  }
))


export {
  useNavStore
}