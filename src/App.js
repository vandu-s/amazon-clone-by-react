import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout'
import Login from './Components/Login/Login';
import { useStateValue } from './StateProvider/StateProvider';
import { auth } from './Firebase/firebase'

function App() {
  const [{ user }, dispatch] = useStateValue();
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
  console.log(user)

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
