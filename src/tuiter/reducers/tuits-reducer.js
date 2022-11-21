import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {createTuitThunk,deleteTuitThunk, findTuitsThunk,updateTuitThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "userName": "Tom Hiddleston",
    "handle": "@Tom",
    "image": "../../images/TomAvatar.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Movie",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}


const tuitSlice = createSlice({
    name: 'tuits',
    initialState,
    extraReducers: {
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            },

        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            }
    },

    reducers: {
        // createTuit(state, action) {
        //     state.unshift({
        //         ...action.payload,
        //         ...templateTuit,
        //         _id: (new Date()).getTime(),
        //     })
        // },
        // deleteTuit(state, action) {
        //     const index = state.findIndex(tuit =>tuit._id === action.payload);
        //     state.splice(index, 1);
        // }
    }
});

export const {createTuit, deleteTuit} = tuitSlice.actions;
export default tuitSlice.reducer;