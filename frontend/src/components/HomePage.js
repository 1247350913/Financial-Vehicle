import TitleBar from './TitleBar';
import Saves from './Saves';

const HomePage = () => {
  return (
    <div>
      <TitleBar/>
      <div className="mainLayout">
        <Saves/> {/* this will display the list of saves from DB */}
        <div className="mainContent">
          <button> Create new Calculation </button> {/* if no saves exist */}
          <button> Select a Save to Begin </button> {/*if saves exist */}
          <button> Run Simulation </button> {/*if save is selected */}
          <button> Edit Parameters </button> {/*if save is selected */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;