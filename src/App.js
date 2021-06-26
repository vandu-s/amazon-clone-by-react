import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'

function App() {
  const [{ basket }, dispatch] = useStateValue();
  //piece of code run on based on a given condition
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in..
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        //the user is logged out..
        dispatch({
          type: "SET_USER",
          user: null
        })

      }
    });
    return () => {
      //any cleanup
      unsubscribe();
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />

          </Route>
          <Route path="/login">
            <Login />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
