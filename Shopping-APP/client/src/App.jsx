import React from "react";
import {BrowserRouter} from 'react-router-dom'
import UserDashBoard from "./pages/UserDashBoard";
const App = () =>
{
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element ={<UserDashBoard/>}>
          <Route path="/" element ={<h1> View Cart </h1>}/>
        <Route path="/" element ={<h1> View Order</h1>}/>
        </Route>
        <Route path="/" element ={<h1> Login Page</h1>}/>
        <Route path="/" element ={<h1>Register Here</h1>}/>

        <Route path="/" element ={<h1> Page##04</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;