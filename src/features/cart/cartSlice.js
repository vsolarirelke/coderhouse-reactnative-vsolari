import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items:[],
    total:0
  }

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        //Agregamos item al carro
        addItemCart: (state,action) => {
            const {id, price, quantity} = action.payload
            const itemFound = state.items.find(item => item.id === id)
            itemFound ? itemFound.quantity + quantity : state.items.push(action.payload)
            state.total+= price * quantity
        },

        //Borramos item del carro
        clearCart:(state) => {
            state.items = [],
            state.total = 0
        },

        //Eliminamos un item del carro
        removeCartItem: (state, { payload }) => {
            const itemsUpdated = state.items.filter(item => item.id !== payload);
            const total = itemsUpdated.reduce(
              (acc, currentItem) =>
                (acc += currentItem.price * currentItem.quantity),
              0
            );
            state.items  = itemsUpdated,
            state.total  = total

        }

        
    }
})

export const {addItemCart, clearCart, removeCartItem} = cartSlice.actions

export default cartSlice.reducer