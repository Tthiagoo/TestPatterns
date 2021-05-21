export interface IPost {
  id: number
  title: string
  body: string
}

export interface IPostsContextData {
  posts: IPost[]
  isLoading: boolean
  fetchPosts: () => void
  removePost: (postId: number) => void
}

export type authContextType = {
  user: boolean
  login: () => void
  logout: () => void
}
