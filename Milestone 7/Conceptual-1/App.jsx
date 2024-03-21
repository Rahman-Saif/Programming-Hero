import { useEffect, useState } from "react"
import SingleProducts from "./components/singleProducts/SingleProducts";

function App() {

  const [posts,setPosts]=useState([])
  
  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(res=>res.json())
    .then(data=>setPosts(data));
  },[])

  // console.log(posts)
  return (
    <>
    <h2>App</h2>
    {
      posts.map((post)=>(
        <SingleProducts product={"gias"}></SingleProducts>
      ))
    }
    
    </>
  )
}

export default App
