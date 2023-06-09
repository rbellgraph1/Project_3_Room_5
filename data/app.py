# Import the dependencies.
import numpy as np
from sqlalchemy import create_engine, inspect, func
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from flask import Flask, jsonify


app = Flask(__name__)
# Database Setup
engine = create_engine("sqlite:///cleaned_tracker_data.db", echo=False)

# Create a Base object
Base = automap_base()

# Reflect the database tables
Base.prepare(engine, reflect=True)

# # Map the classes to the tables
Class1 = Base.classes.table1_name
Class2 = Base.classes.table2_name

# Create a session
session = Session(engine)



@app.route("/")
def welcome():
    return (
        "Tracker Foundations<br>"
        f"/api/v1.0/data<br>"
    )

@app.route('/api/v1.0/data', methods=['GET'])
def api_data():
    results = session.query(Class1, Class2).\
              filter(Class1.column_name == desired_value).\
              all()

    # Return a dictionary with all columns.
    result_dict = {}
    for i, result in enumerate(results):
        result_dict[i] = {'Class1_col1': result.Class1_col1, 'Class1_col2': result.Class1_col2,
                          'Class2_col1': result.Class2_col1, 'Class2_col2': result.Class2_col2}

    return jsonify(result_dict)

if __name__ == "__main__":
    app.run(debug=True)
