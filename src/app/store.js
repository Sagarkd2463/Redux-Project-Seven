import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../features/cartSlice';

const store = configureStore({
    reducer: {
        allCart: CartReducer,
    },
});

export default store;