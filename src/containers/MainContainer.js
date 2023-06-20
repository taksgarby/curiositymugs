import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from '../components/Header';
import ItemsList from '../components/ItemsList';
import storedItems from '../data/ShopItems';
import Basket from '../components/Basket'
import RequestForm from '../components/RequestForm';
import Bespoke from '../components/Bespoke';
import BespokeSample from '../components/BespokeSample';


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
      <Route path="/curiositymugs/form" element={<RequestForm user={user} onRemoveItem={setUser} />} />
      <Route path="/curiositymugs/bespoke" element={<Bespoke />} />
      <Route path="/curiositymugs/bespokesample" element={<BespokeSample />} />
      </Routes>
      </Router>
    );
    
};

export default MainContainer;