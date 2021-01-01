import Navbar from './components/Template/Navbar';
import Footer from './components/Template/Footer';

import MainPage from './components/Pages/MainPage';
import LoginPage from './components/Pages/LoginPage';

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

   <div>
     <nav>
       <ul>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link to="/about">About</Link>
         </li>
         <li>
           <Link to="/main">Main page</Link>
         </li>
       </ul>
     </nav>

     <Switch>
       <Route path="/about">
         <About />
       </Route>
       <Route path="/main">
         <MainPage />
       </Route>
       <Route path="/">
         <Home />
       </Route>
     </Switch>
   </div>
 <Footer />
    </div>
    </Router>
  )
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
export default App;
