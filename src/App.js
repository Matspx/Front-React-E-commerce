import React, { Fragment } from 'react';
import './App.css';

import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Fragment>
      <Nav />
      <Product />
      <Footer />
    </Fragment>
  );
}

export default App;
