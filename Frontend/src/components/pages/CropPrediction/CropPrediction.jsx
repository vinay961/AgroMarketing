import './CropPrediction.css';
import { useState } from 'react';
import axios from 'axios';

function CropPrediction() {
  const [info, setInfo] = useState({
    temperature: '',
    ph: '',
    rainfall: ''
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.post('http://localhost:2100/crop/crop_prediction',info,
      {
        header:{
          'Content-Type': 'application/json'
        },
        withCredentials:true
      }
    )

    setResult(response.data.crop)
  };

  return (
    <div className="crop-predict-container">
      <h1>Find which crop is best for your farm...</h1>
      <form className="crop-predict-form" onSubmit={handleSubmit}>
        <div className="crop-predict-line">
          <label htmlFor="temperature">Temperature</label>
          <input
            type="number"
            name="temperature"
            id="temperature"
            value={info.temperature}
            onChange={handleChange}
          />
        </div>

        <div className="crop-predict-line">
          <label htmlFor="ph">PH value</label>
          <input
            type="number"
            name="ph"
            id="ph"
            value={info.ph}
            onChange={handleChange}
          />
        </div>

        <div className="crop-predict-line">
          <label htmlFor="rainfall">Rainfall (in cm)</label>
          <input
            type="number"
            name="rainfall"
            id="rainfall"
            value={info.rainfall}
            onChange={handleChange}
          />
        </div>

        <div className="crop-predict-buttons">
          <button className="crop-predict-btn-submit" type="submit">Submit</button>
          <button
            className="crop-predict-btn-reset"
            type="reset"
            onClick={() => {
              setInfo({ temperature: '', ph: '', rainfall: '' });
              setResult('');
            }}
          >
            Reset
          </button>
        </div>

        {result && (
          <div className="mt-4 text-center text-lg font-semibold text-green-700">
            🌾 Recommended Crop: <span>{result}</span>
          </div>
        )}
      </form>
    </div>
  );
}

export default CropPrediction;
