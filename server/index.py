from flask import Flask, send_from_directory, jsonify
from database.index import get_db_connection
from flask_cors import CORS

app = Flask(__name__, static_folder="../client/build", static_url_path="/")
CORS(app)

# Database Connection
db = get_db_connection


# Routes

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_static(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/save', methods=['PUT'])
def save_params():
    data = {'message': 'Hello from Flask!'}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)