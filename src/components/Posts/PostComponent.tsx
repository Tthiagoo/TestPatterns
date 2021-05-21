import React from 'react'
import { IPost } from '../../DTOs/PostDto'
import { PostContainer } from '../../styles/pages/posts'
import { usePostsListManagement } from '../../hooks/usePostHook'

export const PostComponent: React.FC<IPost> = ({ id, title, body }) => {
  const { handlePostRemove } = usePostsListManagement()
  return (
    <PostContainer onClick={handlePostRemove(id)}>
      <h1>{id}#</h1>
      <h3>{title}</h3>
      <p>{body}</p>
    </PostContainer>
  )
}
