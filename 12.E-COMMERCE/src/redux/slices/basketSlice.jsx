import { createSlice } from '@reduxjs/toolkit'


const getBasketFromStorege = () => {
    if (localStorage.getItem("basket")) {
        return JSON.parse(localStorage.getItem("basket"))
    }
    return [];
}

const initialState = {
    products: getBasketFromStorege(),
    drawer: false,
    totalAmount: 0
}

const writeBasketToFromStorege = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket))
}


export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const findProduct = state.products && state.products.find((product) => product.id === action.payload.id)
            if (findProduct) {
                // daha önceden eklenmiştir
                const extractedProducts = state.products.filter((product) => product.id != action.payload.id)

                findProduct.count += action.payload.count

                state.products = [...extractedProducts, findProduct]

                writeBasketToFromStorege(state.products)
            } else {
                // daha önceden eklenmemiştir
                state.products = [...state.products, action.payload]
                writeBasketToFromStorege(state.products)
            }
        },
        setDrawer: (state) => {
            state.drawer = !state.drawer;
        },
        calculateBasket: (state) => {
            state.products && state.products.map((product) => {
                state.totalAmount += product.price * product.count;
            })
        }
    }
})


export const { addToBasket, setDrawer, calculateBasket } = basketSlice.actions

export default basketSlice.reducer