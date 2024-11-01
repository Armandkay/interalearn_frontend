import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services'; // New Service page
import Blog from './pages/Blog'; // New Blog page
import FAQ from './pages/FAQ'; // New FAQ page

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} /> {/* New route */}
          <Route path="/blog" component={Blog} /> {/* New route */}
          <Route path="/faq" component={FAQ} /> {/* New route */}
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;

