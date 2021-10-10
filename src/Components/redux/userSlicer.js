import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const userUpdate = createAsyncThunk("users/update", async (user) => {

    const res = await axios.post("http://localhost:8800/apicall/users/123/update", user)
    return res.data
})

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

    },

    extraReducers: {
        [userUpdate.pending]: (state) => {
            state.pending = true
            state.error = false
        },
        [userUpdate.fulfilled]: (state, action) => {
            state.pending = false
            state.userInfo = action.payload
        },
        [userUpdate.rejected]: (state) => {
            state.error = true;
            state.pending = null;
        }
    }
})

export const { updateStart, updateSuccess, updateError } = userSlicer.actions
export default userSlicer.reducer