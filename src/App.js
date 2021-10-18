import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Rgister/Register';
import  NotFound from './pages/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import About from './pages/About/About';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>\
            <PrivateRoute  path="/about">
              <About></About>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route>
              <Register path="/register"></Register>
            </Route>
            <Route>
              <NotFound path="*"></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
