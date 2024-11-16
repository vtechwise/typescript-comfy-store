import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    theme :' dark'
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers:{}
})

 export default themeSlice.reducer