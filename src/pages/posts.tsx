import { usePostsListManagement } from '../hooks/usePostHook'
import { Container, GridPost } from '../styles/pages/posts'
import { PostComponent } from '../components/Posts/PostComponent'

/* eslint-disable react/react-in-jsx-scope */
export default function MainPosts(): JSX.Element {
  const { posts, handlePostRemove, loadPosts } = usePostsListManagement()
  loadPosts()
  return (
    <Container>
      <GridPost>
        {posts.map(post => (
          <PostComponent
            key={post.id}
            body={post.body}
            title={post.title}
            id={post.id}
          />
        ))}
      </GridPost>
    </Container>
  )
}
