import { useState, useEffect } from "react";
import apiService from "../apiService";
import Save from "./Save";

const Saves = () => {
  const [saves, setSaves] = useState([]);

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

  // Fetch saves on component mount
  // Empty dependency array means this effect runs once on mount

  useEffect(() => { 
    getSaves();
  }, []); 

  return (
    <div className="sidebar">
      <button> List of Saves </button>
      <div className="saves-list">
        {saves.map((save, index) => (
          <Save key={index} saveData={save} />
        ))}
      </div>
    </div>
  );
};

export default Saves;