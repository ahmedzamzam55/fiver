import React from 'react';
import './App.css';
import Navbar from './componet/navbar/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './page/home/Home';
import Footer from './componet/footer/Footer';
import Orders from './page/orders/Orders';
import MyGigs from './page/myGigs/MyGigs';
import Add from './page/add/Add';
import Gig from './page/gig/Gig';
import Gigs from './page/gigs/Gigs';
import Message from './page/Message/Message';
import Messages from './page/Messages/Messages';
import ScrollToTopButton from './componet/ScrollToTop/ScrollToTop';


function App() {
   const Layout=()=>{
    return(
      <div className="App">
      <Navbar/>
      <Outlet/>
      <Footer/>
      <ScrollToTopButton/>
      </div>
      )
   }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
        path:"/",
        element :<Home/>
      },
      {
        path:"/gigs",
        element :<Gigs/>
      },
      {
        path:"/gig",
        element :<Gig/>
      },
      {
        path:"/orders",
        element :<Orders/>
      },
      {
        path:"/myGigs",
        element :<MyGigs/>
      },
      {
        path:"/add",
        element :<Add/>
      },
      {
        path:"/Message",
        element :<Message/>
      },{
        path:"/Messages",
        element :<Messages/>
      }

      ]

    },
  ]);
  return (
    <div >
<RouterProvider router={router} />

    </div>
  );
}

export default App;
