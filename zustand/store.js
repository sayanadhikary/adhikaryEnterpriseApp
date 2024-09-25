import { create } from 'zustand';

export const useStorage = create((set) => ({
    user: {},
    cart: [],
    storeUser: (newUser)=> set({user: newUser}),
    addProductToCart: (product) => set((state) => ({cart: [...state.cart, ...product]})),
    increaseQuantity: (id) => set((state) => ({cart:  state.cart.map(p => p.id === id
          ? { ...p, quantity: +p.quantity+1 }
          : p )})),
    decreaseQuantity: (id) => set((state) => ({cart:  state.cart.map(p => p.id === id
            ? { ...p, quantity: +p.quantity-1 }
            : p )})),
    removeFromCart: (id) => set((state) => ({cart: state.cart.filter(p => p.id !== id)}))    
}));

// export const authUserData = (newUser)=> {
//  useStorage.setState((state)=> ({user: {...state.user, ...newUser}}))
// }
