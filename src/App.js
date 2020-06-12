import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Posts from './components/Posts';
import PaginationPosts from './components/PaginationPosts';
import Box from '@material-ui/core/Box';
import AddPosts from './components/AppNav';
import AddPost from './components/AddPost';

const App = () => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

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
        <AddPosts />
        <Box boxShadow={1} p={4} mt='100px' borderRadius='4px'>
          <Posts posts={currentPosts} loading={loading} />
        </Box>
          <PaginationPosts postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
          <AddPost />
      </header>
    </div>
  );
}

export default App;
