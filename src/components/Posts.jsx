import { useEffect, useState } from "react"

export default function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 20))) 
      .catch((err) => console.error(err))
  }, [])

  return (
    <section>
      <h2>Posts Twit</h2>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id} style={{ marginBottom: "20px" }}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando posts...</p>
      )}
    </section>
  )
}

