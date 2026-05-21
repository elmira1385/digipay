
import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './features/counterSlice'
import { boxSlice } from './features/boxSlice'
import { addToBasket } from './features/addToBasket'


export const store = configureStore({
  reducer: {
    counter:counterSlice.reducer,
    boxes:boxSlice.reducer,
    cart:addToBasket.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch