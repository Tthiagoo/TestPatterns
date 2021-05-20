import React from 'react'
import { PostContainer } from '../../styles/pages/posts'
import { Post } from '../../contexts/PostContext'

export const PostComponent: React.FC<Post> = ({ id, title, body }) => {
  return (
    <PostContainer>
      <h1>{id}</h1>
      <h2>{title}</h2>
      <p>{body}</p>
    </PostContainer>
  )
}
