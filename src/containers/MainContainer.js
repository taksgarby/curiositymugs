import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import ItemsList from '../components/ItemsList';
import storedItems from '../data/ShopItems';
import Basket from '../components/Basket'
// import '../styles/Container.css';


const MainContainer = () => {
  const [user, setUser] = useState({
    name: "Will Haveacup",
    email: "love@caffeine.com",
    funds: 150,
    basket: []
  });
  const [items, setItems] = useState(storedItems);

  return (
      <Router>
      <Header user={user} />
      <Routes>
      <Route path="/curiositymugs" element={ <ItemsList items={items} user={user} onBasketAdd={setUser} />} />
      <Route path="/curiositymugs/basket" element={<Basket user={user} onRemoveItem={setUser} />} />
      </Routes>
      </Router>
    );
    
};

export default MainContainer;