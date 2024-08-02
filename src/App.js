import './styles/App.css';
import Header from './components/header';
import Home from './pages/home';
import Details from './pages/details';
import Top from './pages/top';
import Airing from './pages/airing'
import Upcoming from './pages/upcoming'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="bg-black min-h-screen cursor-default">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/airing" element={<Airing />} />
          <Route path="/top" element={<Top />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path='/anime/:id' element={<Details />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
