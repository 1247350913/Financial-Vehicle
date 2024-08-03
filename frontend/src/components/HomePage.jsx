import { useEffect, useState } from 'react';
import apiService from '../apiService';
import TitleBar from './TitleBar';
import Saves from './Saves';

const HomePage = () => {

  // Fetch saves on component mount
  // Empty dependency array means this effect runs once on mount
  useEffect(() => { 
    getSaves();
  }, []); 

  const [saves, setSaves] = useState([]);
  const [selectedSave, setSelectedSave] = useState(null);

  const getSaves = async () => {
    console.log('Getting Saves...');
    try {
      const response = await apiService.get('/saves');
      setSaves(response.data);
      console.log('data Saves...', response.data);
    } catch (err) {
      console.log('ERROR:', err);
    }
  };

  return (
    <div>
      <TitleBar/>
      <div className="mainLayout">
        <Saves/>
        <div className="mainContent">
          {saves.length > 0 ? (<button> Select a Save to Begin </button>) :
          (<button> Create new Calculation </button>)} 
          {selectedSave && ( <>
            <button> Run Simulation </button> 
            <button> Edit Parameters </button>
            </>)}
        </div>
      </div>
    </div>
  );
};

export default HomePage;