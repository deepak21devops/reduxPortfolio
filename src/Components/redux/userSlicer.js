import { createSlice } from '@reduxjs/toolkit'

export const userSlicer = createSlice({
    name: "repo",
    initialState: {
        userInfo: {
            username: "Florence Pugh",
            email: "florence99123@gmail.com"
        },
        pending: null,
        error: false,

    },
    reducers: {

        updateStart: (state) => {
            state.pending = true
            state.error = false
        },

        updateSuccess: (state, action) => {
            state.pending = false
            state.userInfo = action.payload
        },

        updateError: (state) => {
            state.error = true;
            state.pending = false;
        }


    }
})

export const { updateStart, updateSuccess, updateError } = userSlicer.actions
export default userSlicer.reducer