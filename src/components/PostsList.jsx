import { useQuery } from "@tanstack/react-query"
import { fetchPosts } from "../api/api"


const PostsList = () => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['posts', {page: 1, limit: 10}],
        queryFn: fetchPosts
    })

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error occurred while fetching posts.</p>}
      {data && (
        <div className="posts-container">
          {data.map(post => (
            <div className="post" key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              {
                post.tags && post.tags.length > 0 && (
                  <div className="tags">
                    {post.tags.map((tag, index) => (
                      <span className="tag" key={index}>{tag}</span>
                    ))}
                  </div>
                )
              }
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default PostsList