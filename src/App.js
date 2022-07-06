import './App.css';
import Home from './Pages/Home';
import Projects from './components/Projects';

function App() {
  return (
    <div className='flex flex-row'>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
