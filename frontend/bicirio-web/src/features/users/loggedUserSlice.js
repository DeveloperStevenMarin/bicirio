import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    data: [],
    loading: false,
    error: null
}

export const loggedUserSlice = createSlice({
    name: 'loggedUser',
    initialState,
    reducers: {
        addLoggedUser: (state, action) => {
            state.data = (action.payload);
        }

        ,
        removeLoggedUser: (state, action) => {
            state.data = (action.payload)
        }
    }
});

export const { addLoggedUser, removeLoggedUser } = loggedUserSlice.actions
export default loggedUserSlice.reducer

