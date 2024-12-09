from flask_restx import fields, Model

query_model = Model(
    "QueryModel",
    {
        "request": fields.String(required=True, description="User input"),
    }
)
