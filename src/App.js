import React from "react"
import { Routes , Route } from "react-router-dom"
import { Provider } from "react-redux";
import "./styles/app.scss"

//COMPONENTS
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import Details from "./components/Details";
import CheckOut from "./components/CheckOut";
import Home from "./components/Home";

//REDUX
import store from "./redux/store";

function App() {
  
  return (
       <Provider store={store}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/products" element={<Store />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/checkout" element={<CheckOut />}/>
          </Routes>        
       </Provider>
  )
}

export default App;
