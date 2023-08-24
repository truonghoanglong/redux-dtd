import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {}
})

// Laasy RootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
