import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Counter from './components/Counter';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div>
    <Navbar />
    {/* <Counter /> */}
    <SearchBar />
    </div>
  );
}

export default App;
