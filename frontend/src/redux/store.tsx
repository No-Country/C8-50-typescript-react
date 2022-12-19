import { configureStore } from '@reduxjs/toolkit'
import { detailsComentReducer } from './reducer/detailComent'
import { detailStateReducer } from './reducer/detailState'
import { stateReducer } from './reducer/stateReducer'

export const store = configureStore({
  reducer: {
    realstate: stateReducer,
    detailstate: detailStateReducer,
    comentState: detailsComentReducer
  }
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch