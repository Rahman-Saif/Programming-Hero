
import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header/Header'
import Blogs from './blogs/Blogs';
import Bookmarks from './bookmark/Bookmarks';

function App() {
  const [blogs,setBlogs]=useState([]);
  const [bookMarks,setBookmarks]=useState([])
  const [ptime,setpTime]=useState(0);

  const handleBookmarks=blog=>{
    const newBookmarks=[...bookMarks,blog];
    setBookmarks(newBookmarks);
  }

  const handleTime=time=>{
    const newTime=ptime+time;
    setpTime(newTime);
  }

  useEffect(()=>{
    fetch('blog.json')
    .then(res=>res.json())
    .then(data=>setBlogs(data));
  },[])

  return (
    <>
      <Header></Header>
      <Blogs blogs={blogs} handleBookmarks={handleBookmarks} handleTime={handleTime}></Blogs>
      <Bookmarks ptime={ptime} bookMarks={bookMarks}></Bookmarks>
    </>
  )
}

export default App

/*

1st step: Header component add korbo!
2nd step:Blog gula show korabo - data fetch,state thik kora,thik koira child a pthano
3rd step:Bookmark show korano lagbe - 
4th step:Time set kora 
5th step: Successful!














*/
