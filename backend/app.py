# backend/app.py

from flask import Flask, jsonify
from flask_cors import CORS
from api_handlers import fetch_metrics

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend-backend communication

@app.route('/api/metrics')
def get_metrics():
    metrics = fetch_metrics()
    return jsonify(metrics)

if __name__ == '__main__':
    app.run(debug=True)
