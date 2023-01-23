import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
// import ContactPage from './pages/contact';
// import AboutPage from "./pages/about";
// import FaqsPage from "./pages/faqs";
// import SupportPage from "./pages/support";
// import IndexPage from "./pages";
// import WebProduct from "./pages/products/product";
// import NotFound from "./pages/notFound";
// import Redirect from "./pages/Redirect";

class App extends Component {
  render() {
    // console.log(this.props)
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
