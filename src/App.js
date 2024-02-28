import React, {useState, useEffect} from 'react';
import LandingPage from './Components/LandingPage'
import MainContent from './Components/MainContent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  const [loading, setLoading] = useState(true);
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    setLoading(true)
    setShowMain(false)

    setTimeout(() => {
      setLoading(false)
    }, 2500)

    setTimeout(() => {
      setShowMain(true)
    }, 3500)
  }, [])

  return (
    <div className={`App ${!showMain ? 'loading' : ''} ${showMain ? 'light-background' : ''}`}>
      <LandingPage loading={loading} showMain={!showMain} />
      {showMain && <MainContent showMain={showMain}/>}
    </div>
  );
}

export default App;
