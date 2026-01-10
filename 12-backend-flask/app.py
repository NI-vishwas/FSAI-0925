from flask import Flask,jsonify
import datetime
app = Flask(__name__)

listings = [
    {'id':1,'listing':'BlrApt'},
    {'id':2,'listing':'PubApt'},
    {'id':3,'listing':'CheApt'},
    {'id':4,'listing':'MysApt'},
]

@app.route("/")
def hello_world():
    return '<h1>Hello Vishwas</h1>'

@app.route("/lisitngs")
def home_listings():
    return jsonify({
        'message': "Listings successful",
        'timestamp': datetime.datetime.now(),
        'success': True,
        'data': listings
    }), 200

@app.route("/api/v1/listings/<int:listing_id>", methods=['GET'])
def get_listing(listing_id):
    listing = None
    for item in listings:
        if item['id'] == listing_id:
            listing = item
            return jsonify({
                'message': "Listings successful",
                'timestamp': datetime.datetime.now(),
                'success': True,
                'data': listing
            }), 200
        else:
            return jsonify({
                'message': "Listing not found",
                'timestamp': datetime.datetime.now(),
                'success': False,
                'data': None
            }), 400
    
if __name__ == '__main__':
    app.run(debug=True)