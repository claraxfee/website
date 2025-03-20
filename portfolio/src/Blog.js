import {useState, useEffect} from 'react';

function Blog() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([
            { id: "one", title: "My First Blog Post" },
            { id: "second-post", title: "Another Cool Topic" },
        ]);
    }, []);

    return (
        <div>
          <h1>My Blog</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <a href={`/posts/${post.id}.md`} target="_blank">{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Blog;