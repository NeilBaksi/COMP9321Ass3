from flask import Flask
from flask import request
from flask_restplus import Resource, Api
from flask_restplus import fields
from flask_restplus import inputs
from flask_restplus import reqparse

app = Flask(__name__)
api = Api(app,
    default="Assignment ",  # Default namespace
    title="COMP9321 Assignment 3",  # Documentation Title
    description="Demo - Build ML model for predicting crime"
      # Documentation Description
)

@api.route('/<string:location>/<string:crime_type>')
class PredictCrime(Resource):
    @api.response(404, 'Did not work')
    @api.response(200, 'Successful')
    @api.doc(description="Get a prediction of the crime in a particular location")
    def get(self, location, crime_type):
        return {'crimetype': crime_type, 'location':location}

if __name__ == '__main__':
	# run the application
    app.run(debug=True)