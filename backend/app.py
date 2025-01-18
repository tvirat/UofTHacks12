from flask import Flask, jsonify, render_template
import SendDatatToFE

# Initialize the Flask app
app = Flask(__name__)

# Define a route for the home page
@app.route("/")
def home():
    return "Hello, Flask!"

# Define another route (optional)
@app.route("/about")
def about():
    return "This is the about page."

@app.route('/api/memories', methods=['GET'])
def get_memories():
    memory_json = SendDatatToFE.fetch_memory_data_as_json()
    print(jsonify(memory_json))
    return jsonify(memory_json)

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
