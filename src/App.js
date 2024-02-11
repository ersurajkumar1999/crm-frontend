import './App.css';

// routing
import Routes from './routes';
import { BASE_URL } from './services/config';

function App() {
  console.log("BASE_URLBASE_URL==>",BASE_URL);
  return (
    <Routes />
  );
}

export default App;
