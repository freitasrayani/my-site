import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './componentes/homeContent/Home';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Contact from './componentes/contact/Contact';
import About from './componentes/about/About';
import Portfolio from './componentes/portfolio/Portfolio';
import ErrorPage from './componentes/404Page/ErrorPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/portfolio">
            <Portfolio />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route >
            <ErrorPage />
          </Route>
        </Switch>

        <Footer />
      </div>

    </BrowserRouter>
  )
}

export default App
