import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header';
import Home from './Home'

function App() {
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

            <h1>checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
