import { configureStore } from '@reduxjs/toolkit'
import blogReducer from 'pages/blog/components/blog.reducer'

export const store = configureStore({
    reducer: { blog: blogReducer }
})

// Laasy RootState và AppDispatch từ store của chúng ta
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
