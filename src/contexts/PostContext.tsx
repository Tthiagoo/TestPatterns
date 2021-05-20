/* eslint-disable react/react-in-jsx-scope */
import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback
} from 'react'

export interface Post {
  id: number
  title: string
  body: string
}
type Props = {
  children: ReactNode
}

export interface PostsContextData {
  posts: Post[]
  isLoading: boolean
  fetchPosts: () => void
  removePost: (postId: number) => void
}

export const PostsContext = createContext({} as PostsContextData)

export function usePostContext(): PostsContextData {
  return useContext(PostsContext)
}

export function PostProvider({ children }: Props): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchPosts = useCallback(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(fetchedPosts => {
        setPosts(fetchedPosts)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [setPosts])

  const removePost = useCallback(
    (postId: number) => {
      setIsLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: 'DELETE'
      })
        .then(() => {
          const newPosts = [...posts]
          const removedPostIndex = newPosts.findIndex(
            post => post.id === postId
          )
          if (removedPostIndex > -1) {
            newPosts.splice(removedPostIndex, 1)
          }
          setPosts(newPosts)
        })
        .finally(() => {
          setIsLoading(false)
        })
    },
    [setPosts, posts]
  )
  const value = {
    posts,
    isLoading,
    fetchPosts,
    removePost
  }

  return (
    <>
      <PostsContext.Provider value={value}>{children}</PostsContext.Provider>
    </>
  )
}
