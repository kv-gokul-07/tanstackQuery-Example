import { useQuery } from '@tanstack/react-query'
import { useState } from 'react';
import './App.css'
import { fetchPosts } from './api/api';
import PostsList from './components/PostsList';


function App() {
  const [count, setCount] = useState(0);

  const { data, isLoading, isError, status } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts
  })


  return (
    <div>
      <h1>My Posts</h1>
      <PostsList />
    </div>
  )
}

export default App
