import Header from '../components/Header/Header.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PostsList from '../features/PostsList/PostsList';
import Footer from '../components/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <div className = 'app'>
      <Router>
        <Header /> 
        <Routes>
          <Route path = "/"  exact element = {<PostsList/>}/>

  
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
