import React, { useState, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

const AudioWaveform = () => {
  const waveformRef = useRef(null);
  const [waveSurferInstance, setWaveSurferInstance] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const audioData = e.target.result;
        if (waveSurferInstance) {
          waveSurferInstance.destroy(); // Reset previous instance if any
        }

        const newWaveSurfer = WaveSurfer.create({
          container: waveformRef.current,
          waveColor: '#A8DBA8',
          progressColor: '#3B8686',
          cursorColor: '#FF6F61',
          height: 100,
        });

        newWaveSurfer.loadBlob(new Blob([audioData]));
        setWaveSurferInstance(newWaveSurfer);
      };
      reader.readAsArrayBuffer(file); // Convert audio file to ArrayBuffer for wavesurfer
    }
  };

  return (
    <div>
      <h2>Upload .wav File</h2>
      <input type="file" accept=".wav" onChange={handleFileUpload} />
      <div
        ref={waveformRef}
        style={{ width: '100%', height: '150px', backgroundColor: '#f4f4f4' }}
      />
    </div>
  );
};

export default AudioWaveform;
