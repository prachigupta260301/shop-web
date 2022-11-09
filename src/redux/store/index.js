import { configureStore } from '@reduxjs/toolkit';
import userDataReducer from '../user/userSlice';

export const store = configureStore({
    reducer: {
        userData: userDataReducer,
    },
})