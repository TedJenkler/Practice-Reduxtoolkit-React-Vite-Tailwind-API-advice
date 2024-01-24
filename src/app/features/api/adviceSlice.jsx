import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const ADVICE_URL = 'https://api.adviceslip.com/advice'

export const fetchAdvice = createAsyncThunk("fetchAdvice", async () => {
    const data = await fetch(ADVICE_URL)
    return data.json()
})

const initialState = {
    data: {slip: {id: "loading", advice: "loading"}},
    isLoading: false,
    error: false
}

export const adviceSlice = createSlice({
    name: 'advice',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAdvice.pending, (state, action) => {
            state.isLoading = true
        });
        builder.addCase(fetchAdvice.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload
        });
        builder.addCase(fetchAdvice.rejected, (state, action) => {
            state.error = true;
        });
    }
})

export default adviceSlice.reducer;