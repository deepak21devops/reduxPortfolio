import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Sidebar from './Components/Sidebar/Sidebar';
import UpdateBar from './Components/UpdateBar/UpdateBar';
import RightBar from './Components/RightBar/RightBar.jsx'


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Container">
        <Sidebar />
        <UpdateBar />
        <RightBar />
      </div>

    </div>
  );
}

export default App;
