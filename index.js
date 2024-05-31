import React, { useState } from 'react';

function App() {
  const [rpm, setRpm] = useState('');

  const handleInputChange = (e) => {
    setRpm(e.target.value);
  };

  const getGear = () => {
    if (rpm === '' || rpm === '0') return 'Neutral';
    if (rpm.toLowerCase() === 'r') return 'You are in Reverse mode';
    const rpmValue = parseInt(rpm, 10);
    if (isNaN(rpmValue)) return 'Invalid input';
    if (rpmValue >= 120) return 'You are in 5th gear';
    if (rpmValue >= 100) return 'You are in 4th gear';
    if (rpmValue >= 60) return 'You are in 3rd gear';
    if (rpmValue >= 20) return 'You are in 2nd gear';
    return 'You are in 1st gear';
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>RPM Gear Indicator</h1>
        <input
          type="text"
          value={rpm}
          onChange={handleInputChange}
          placeholder="Enter RPM or R/r for reverse"
        />
        <p>{getGear()}</p>
      </header>
<style jsx>{`
.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

input {
  padding: 10px;
  font-size: 1rem;
  margin-bottom: 20px;
}

`}</style>
    </div>
  );
}

export default App;
