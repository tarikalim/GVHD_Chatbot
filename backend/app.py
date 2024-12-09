from flask import Flask
from flask_restx import Api
from API.chat import chat_ns
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
api = Api(app, version="1.0", title="Chatbot API", description="API for graphRAG frontend")

api.add_namespace(chat_ns, "/")

if __name__ == "__main__":
    app.run(debug=True)
