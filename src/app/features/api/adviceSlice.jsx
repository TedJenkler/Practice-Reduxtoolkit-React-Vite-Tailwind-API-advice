import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nr: 117,
    advice: "It is easy to sit up and take notice, what's difficult is getting up and taking action."
}

export const adviceSlice = createSlice({
    name: 'advice',
    initialState,
    reducers: {
        test: (state) => {
            state.nr = state.nr
        }
    }
})

export default adviceSlice.reducer;