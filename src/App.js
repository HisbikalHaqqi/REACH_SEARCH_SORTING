import './App.css';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Frontend from './Pages/Frontend';
import Backend from './Pages/Backend';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
              <svg className="bi me-2" width="40" height="32"></svg>
              <span className="fs-4">BERITA KU</span>
            </a>

            <ul className="nav nav-pills">
              <li className="nav-item"><NavLink to="/frontend" className="nav-link">Top Headline</NavLink></li>
              <li className="nav-item"><NavLink to="/backend" className="nav-link">Articles</NavLink></li>
              <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
              <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
              <li className="nav-item"><a href="#" className="nav-link">About</a></li>
            </ul>
          </header>
        </div>
        <div className="album py-5 bg-light">
          <div className="container">
            <Route path="/frontend" component={Frontend}/>
            <Route path="/backend" component={Backend}/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
