from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


@app.route('/api/data')
def get_data():
    data = {
        'title': 'Bienvenue dans mon application pour sublimer vos feuilles de match',
        'message': 'Un max de likes sur votre insta avec des feuilles de match canons'
    }
    return jsonify(data)


if __name__ == '__main__':
    app.run()
