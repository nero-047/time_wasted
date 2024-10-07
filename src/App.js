import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [timeDifference, setTimeDifference] = useState(null);

  const fixedDateTime = new Date("2002-10-31T15:45:00");

  // Function to calculate the time difference
  const calculateTimeDifference = () => {
    const currentTime = new Date();
    const diff = currentTime - fixedDateTime; // Difference in milliseconds

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    setTimeDifference({ years, days, hours, minutes, seconds });
  };

  useEffect(() => {
    const interval = setInterval(calculateTimeDifference, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      {timeDifference && (
        <div>
          <p>
            {timeDifference.years} : {timeDifference.days} : {timeDifference.hours} : {timeDifference.minutes} : {timeDifference.seconds}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
