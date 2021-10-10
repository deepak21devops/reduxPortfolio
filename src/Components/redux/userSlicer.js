import { createSlice } from '@reduxjs/toolkit'

export const userSlicer = createSlice({
    name: "repo",
    initialState: {
        username: "Florence",
        email: "florence99@gmail.com"
    },
    reducers: {
        update: (state, action) => {
            state.username = action.payload.first
            state.email = action.payload.mail
        },

        remove: (state) =>
            (state = {}),

        addTitle: (state, action) => {
            state.username = `Hello ${action.payload.first}`
        }
    }
})

export const { update, remove, addTitle } = userSlicer.actions
export default userSlicer.reducer