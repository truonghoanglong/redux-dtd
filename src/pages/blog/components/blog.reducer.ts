import { createAction, createReducer } from '@reduxjs/toolkit'
import { initalPostList } from 'constants/blog'
import { Post } from 'types/blog.type'

interface BlogState {
    postList: Post[]
}

const initalState: BlogState = {
    postList: initalPostList
}

export const addPost = createAction<Post>('blog/addPost')

const blogReducer = createReducer(initalState, (builder) => {})

export default blogReducer
