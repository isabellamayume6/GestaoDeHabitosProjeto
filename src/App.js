import Routes from './routes'
import './App.css';
import {Toaster} from 'react-hot-toast'
function App() {
  return (
    <div className="App">
      <div>
        <Toaster/>
      </div>
      <Routes/>
    </div>
  );
}

export default App;
