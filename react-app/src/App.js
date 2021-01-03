import Navbar from './components/Template/Navbar';
import Footer from './components/Template/Footer';

import MainPage from './components/Pages/MainPage';
import LoginPage from './components/Pages/LoginPage';
import DashboardPage from './components/Pages/DashboardPage';
import ProfilePage from './components/Pages/ProfilePage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/dashboard" exact>
              <DashboardPage />
            </Route>
            <Route path="/profile" exact>
              <ProfilePage />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/">
              404
            </Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
