import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Posts from './components/Posts';
import PaginationPosts from './components/PaginationPosts';
import Box from '@material-ui/core/Box';

const App = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }

    fetchPost()
  }, [])

  // Get Current Posts
  const indexLastPost = currentPage * postsPerPage
  const indexFirstPost = indexLastPost - postsPerPage
  const currentPosts = posts.slice(indexFirstPost, indexLastPost)

  // Change Page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className="App">
      <header className="App-header">
        <Box style={styles.container} boxShadow={2} p={4}>
          <h1>Posts</h1>
          <Posts posts={currentPosts} loading={loading} />
        </Box>
          <PaginationPosts postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
      </header>
    </div>
  );
}

const styles = {
  container: {
    borderRadius: '5px',
  }
}

export default App;
