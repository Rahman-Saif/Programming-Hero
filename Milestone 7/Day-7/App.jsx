import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Blogs from './components/header/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
  const [count, setCount] = useState(0);
  const [bookmarks,setBookmarks]=useState([])
  const [spentTime,setSpentTime]=useState(0)

  const handleSpentTime=time=>{
    const newSpentTime=spentTime+time;
    setSpentTime(newSpentTime);
  }

  const handleAddToBookmark=time=>{
    const newBookmarks=[...bookmarks,time];
    setBookmarks(newBookmarks);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleSpentTime={handleSpentTime}></Blogs>
      <Bookmarks bookmarks={bookmarks} spentTime={spentTime}></Bookmarks>
    </div>
    </>
  )
}

export default App

/*

1st step : tailwind css add korlam
2nd step: Header component banailam
3rd step: create fake data- Give me 5 fake data:id,cover,title,author,author img,posted-date,reading-time,hashtags.Give me in json format
4th step: fake data banailam, eibar Blogs.jsx file khullam..ekhon fake data gula show koraite hobe .
tai suru te data gula set kora lagbe useState diye,tarpor useEffect diye fetch kora lagbe 
4th step:font use korlam new 
5th step:profile.png ke niye aslam
6th step : component e css style add kortesi ,alada div e,element e 
7th step: jehetu blogs e sobgula blog ache,tai blog.jsx khullam,eita diye loop kore sobgula blog show korabo.jehetu props use korsi tai proptypes o 
use korsi 



Tip: jokhon blogs e onekgula blog thake tokhon map diye ekekta blog render korte hoy , direct <Blog blog={blog} evabe korle hobe na!
Tip:jodi props e ekta array o receive kori taileo seta {} bracket er vitore map kore render korte hobe
Tip: jodi dekhi unique id nai,taile map e idx use korbo


Learnings:
1. 2 vabe data pass kora jay = parent->child,child->parent 
parent-> child e props use kora hoy
child->parent e method use kora jay ( parent folder e method create korbo and function er parameter thakbe, ei parameter ei child theke 
data eshe pouchabe . ar child e oi function use kore data send korbo )

2.State lifting e parent-child relation dhore parent e state declare korte hoy
        App
        / | \
    Blog  Blogs Bookmarks
    goal:blog e button thakbe,oita click korle bookmark e blog add hobe 
    solution: parent (App) e state declare korbo & blog e click korle state change kore bookmark e pathay dibo

8th step: Parent e state ta set korte hobe..state set korar por seta child e send korte hobe 
9th step:bookmarks e onekgula array hisebe ache ar individually show koranor jonne alada ekta bookmark.jsx khule fellam


*/


