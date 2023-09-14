import { useState } from 'react'
import './App.css'
import Blogs from './componed/Blogs/Blogs'
import Bookmarks from './componed/Bookmarks/Bookmarks'
import Header from './componed/Hederl/Header'

function App() {
    const [bookmarks, setBookmarks] = useState([]);

    const handleAddToBookmark = blog =>{
      const newBookmarks = [...bookmarks, blog];
      setBookmarks(newBookmarks);
      // console.log(blog)
    }

  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
      <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
