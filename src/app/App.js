import Header from '../components/Header/Header.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PostsList from '../components/PostsList/PostsList';
import PostDetails from '../features/PostDetails/PostDetails.js';
import Footer from '../components/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <div className = 'app'>
      <Router>
        <Header /> 
        <Routes>
          <Route path = "/"  exact element = {<PostsList/>}/>

          <Route path = "/post/:postID" element = {<PostDetails/>}/> 
  
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
