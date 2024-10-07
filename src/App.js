import './App.css';
import LeftSide from './components/LeftSide';
import MiddleSide from './components/MiddleSide';

function App() {
  const userProfilePicTest = 'https://img.freepik.com/psd-gratis/ilustracion-3d-avatar-o-perfil-humano_23-2150671142.jpg';
  return (
    <div className="App">
      <div className='leftSide'>
        <LeftSide userProfilePic={userProfilePicTest} /> 
      </div>
      <div className='middleSide'>
        <MiddleSide />
      </div>
      <div className='rightSide'>
      
      </div>
    </div>
  );
}

export default App;
