import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Header from './Component/header';
import Nav from './Component/nav';
import Footer from './Component/footer';
import routes from './Config/route';
import './App.css';
import { ThemeProvider } from './Config/themeContext';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Nav />
        <Header />
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
              />
            );
          })}
        </Switch>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
