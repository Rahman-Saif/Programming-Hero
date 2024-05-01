import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home.jsx';
import Header from './components/header/Header.jsx';
import About from './components/about/About.jsx';
import Contact from './components/contact/Contact.jsx';
import Users from './components/users/Users.jsx';
import UserDetails from './components/userDetails/UserDetails.jsx';
import Posts from './components/posts/Posts.jsx';
import postDetails from './components/posts/postDetails.jsx';
import ErrorPage from './components/errorpage/ErrorPage.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },{
        path:'/contact',
        element:<Contact></Contact>
      },{
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },{
        path:'/user/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },{
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },{
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<postDetails></postDetails>
      }
    ]
  },
  // {
  //   path:'/about',
  //   element:<div>I am in the about page!</div>
  // },{
  //   path:'header',
  //   element:<Header></Header>
  // }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)


/*

step 1 : react router boshailam, React.strictMode er vitor router provider disi, then 
path gula set korlam, element er moddhe page er nam gula disi 

tip #1: jodi kichu jinish unchanged rakhte chai,taile <outlet> use korbo

step 2 : a tag use na kore link tag use korbo
step 3 : useLoader use korsi useEffect kore fetch korar bodole 
step 4 : Dynamic routing korsi , button e click korle ekta new url e jate jay seta set korsi 
tarpor loader e params use kore dynamic kore disi 
step 5 : page banailam,then routing path set korlam, then posts e receive korlam,tarpor single post gula dekhailam
ekhon dynamic korar jonne button e dynamic url banailam , tarpor alada postId er path set korlam,url set korlam and element e 
jei page e jabe sei page dilam, tarpor seii page e ja ja dekhanor segula dekhailam

step 6 : usenavigate hook use korsi, kaj same ei - onno link e send kore, hook import krlm and url boshay dilam
step 7 : usenavigation diye spinner banaisi 

*/
