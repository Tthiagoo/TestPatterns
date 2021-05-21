/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useCallback, useEffect } from 'react'
import { usePostContext } from '../contexts/PostContext'

export function usePostsListManagement() {
  const { removePost, posts, fetchPosts } = usePostContext()

  const loadPosts = () => {
    useEffect(() => {
      fetchPosts()
    }, [fetchPosts])
  }

  const handlePostRemove = useCallback(
    (postId: number) => () => {
      removePost(postId)
    },
    [removePost]
  )

  return {
    handlePostRemove,
    posts,
    loadPosts
  }
}
