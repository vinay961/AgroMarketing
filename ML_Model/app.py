from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

model = joblib.load('crop_model.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        temp = float(data['temperature'])
        ph = float(data['ph'])
        rainfall = float(data['rainfall'])

        input_data = np.array([[temp, ph, rainfall]])
        prediction = model.predict(input_data)
        return jsonify({'crop': prediction[0]})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=8000)
