import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
    postList: Post[]
    editingPost: Post | null
}

const initalState: BlogState = {
    postList: initalPostList,
    editingPost: null
}

export const addPost = createAction<Post>('blog/addPost')
export const deletePost = createAction<string>('blog/deletePost')
export const startEditingPost = createAction<string>('blog/startEditingPost')

const blogReducer = createReducer(initalState, (builder) => {
    builder
        .addCase(addPost, (state, action) => {
            const post = action.payload
            state.postList.push(post)
        })
        .addCase(deletePost, (state, action) => {
            const postId = action.payload

            state.postList = state.postList.filter((item) => item.id !== postId)
        })
        .addCase(startEditingPost, (state, action) => {
            const postId = action.payload
            const foundPost =
                state.postList.find((post) => post.id === postId) || null
            state.editingPost = foundPost
        })
})

export default blogReducer
