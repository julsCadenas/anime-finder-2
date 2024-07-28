import './styles/App.css';
import Header from './components/header';
import Home from './pages/home';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <Home />
    </div>
  );
}

export default App;
