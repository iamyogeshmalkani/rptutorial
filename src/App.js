
import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Blog from './components/blog'

function App() {
  const Home = () => {
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  };
  
  const About = () => {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  };

  const Contact = () => {
    return (
      <div>
        <h1>Contact Us</h1>
        <p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14022.666287571394!2d77.1646084!3d28.5196778!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa0005a3dce2ba472!2sR%20P%20Tutorials!5e0!3m2!1sen!2sin!4v1633018433304!5m2!1sen!2sin" width="600" height="450"  style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>      </p>
      </div>
    );
  };
  return (
    <Router>
      
      
        <Navbar />

        <div className="pages">
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            
          </Switch>
        </div>
        <Footer />
      </Router>
  );
}

export default App;
