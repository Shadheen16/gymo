import './App.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './provider/AuthProvider';
import About from './pages/About/About';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Blog from './pages/Blog/Blog';
import ServiceDetail from './pages/Services/ServiceDetail/ServiceDetail';
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route>
              <Register exact path="/register"></Register>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/service/detail">
              <ServiceDetail/>
            </Route>
            <Route path="service/:serviceId">
              <ServiceDetail></ServiceDetail>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route>
              <NotFound path="*"></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
