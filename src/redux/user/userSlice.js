import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FAKE_STORE_URL } from "../../constants";

export const getLorems = createAsyncThunk(
    "getLorems",
    async (object, { getState, rejectWithValue }) => {
        try {
            const { data: response, status } = await axios.get(`${FAKE_STORE_URL}/products`);
            return response;
        } catch (error) {
            rejectWithValue(error.response);
        }
    }
);

export const userSlice = createSlice(
    {
        name: "user",
        initialState: {
            data: [],
            loading: false,
            isSuccess: false,
            message: "",
        },
        reducers: {},
        extraReducers: {
            [getLorems.pending]: (state, action) => {
                state.loading = true;
            },
            [getLorems.fulfilled]: (state, { payload }) => {
                state.loading = false;
                state.data = payload;
                state.isSuccess = true;
            },
            [getLorems.rejected]: (state, { payload }) => {
                state.loading = false;
                state.isSuccess = false;
                state.message = "failed";
            },
        },
    }
);

// this is for dispatch
export const { userData } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;