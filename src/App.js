import './App.css';
import { LoginPage } from './components/LoginPage';
import Typography from '@mui/material/Typography';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='logPage'>
          <LoginPage />
        </div>
      </header>
    </div>
  );
}

export default App;
