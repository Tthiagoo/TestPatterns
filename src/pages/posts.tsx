import { usePostContext } from '../contexts/PostContext'
import { usePostsListManagement, usePostsLoading } from '../hooks/usePostHook'
import { Container, GridPost, PostItem } from '../styles/pages/posts'

/* eslint-disable react/react-in-jsx-scope */
export default function MainPosts(): JSX.Element {
  const { posts, handlePostRemove } = usePostsListManagement()

  usePostsLoading()
  return (
    <Container>
      <GridPost>
        {posts.map(post => (
          <div key={post.id} onClick={handlePostRemove(post.id)}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </GridPost>
    </Container>
  )
}
