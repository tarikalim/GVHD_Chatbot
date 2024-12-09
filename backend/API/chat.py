from flask_restx import Namespace, Resource, fields
from backend.DTO.chat_dto import query_model
from backend.Service.chat_service import process_query

chat_ns = Namespace("chat", description="Chat response and request")

chat_response_model = chat_ns.model('ChatResponse', {
    'response': fields.String(description='Chatbot response', required=True)
})

chat_ns.models[query_model.name] = query_model


@chat_ns.route("")
class ChatResource(Resource):
    @chat_ns.expect(query_model, validate=True)
    @chat_ns.marshal_with(chat_response_model, code=200, description="Successful response")
    def post(self):
        data = chat_ns.payload

        response_data = process_query(data)

        return response_data
