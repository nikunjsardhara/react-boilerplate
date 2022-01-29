import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    links: [
        {
            text: "Market",
            href: '/',
            active: true,
        },
        {
            text: "Exchange",
            href: '/exchange',
            active: false
        },
        {
            text: "Tutorials",
            href: '/tutorials',
            active: false
        },
        {
            text: "Wallets",
            href: '/wallets',
            active: false
        },
    ]
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setLinkActive: (state, action) => {
            state.links.map((link) => {
                link.active = false;
            });
            let objInd = state.links.findIndex((obj => obj.text == action.payload));
            state.links[objInd].active = true;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setLinkActive } = headerSlice.actions

export default headerSlice.reducer