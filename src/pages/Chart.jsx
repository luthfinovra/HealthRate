import React, { useState, useEffect } from 'react';
import HeartRateChart from '../components/HeartRateChart';

const Chart = () => {
  const [heartRateData, setHeartRateData] = useState([]);

  useEffect(() => {
    // Simulasi data detak jantung setiap detik
    const interval = setInterval(() => {
      setHeartRateData((prevData) =>
        [...prevData, Math.random() * (100 - 60) + 60].slice(-100)
      ); // simulates a BPM range from 60 to 100
    }, 1000); // Simulasi setiap 1 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Heart Rate Monitor</h1>
      <HeartRateChart data={heartRateData} />
    </div>
  );
};

export default Chart;
