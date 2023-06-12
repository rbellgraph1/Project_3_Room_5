import numpy as np
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, jsonify

app = Flask(__name__)
#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///tracker_info.sqlite")
# reflect an existing database into a new model
Base = automap_base()
# # reflect the tables
Base.prepare(engine, reflect=True)
# # Save reference to the table
# print(engine.table_names())



@app.route("/")
def welcome():
    return (
        "Tracker Foundations<br>"
        f"/api/v1.0/tracker_info<br/>"
    )


@app.route("/api/v1.0/tracker_info")
def ID_Num():
    # Create our session (link) from Python to the DB
    session = Session(engine)
    #  Query all all
    results = session.execute("select * from tracker").all()
    # Convert list of tuples into normal list
    all_tracker_info = []
    for res in results:
        tracker_dict = {}
        tracker_dict["Company"] = res[1]
        tracker_dict["Device"] = res[2]
        tracker_dict["Croud funded"] = res[3]
        tracker_dict["Country"] = res[4]
        tracker_dict["Region"] = res[5]
        tracker_dict["Release year"] = res[6]
        tracker_dict["Type"] = res[7]
        tracker_dict["Accelerometer"] = res[8]
        tracker_dict["Gyroscope"] = res[9]
        tracker_dict["Magnetometer"] = res[10]
        tracker_dict["Barometer"] = res[11]
        tracker_dict["GPS"] = res[12]
        tracker_dict["Heart Rate"] = res[13]
        tracker_dict["lat"] = res[13]
        tracker_dict["long"] = res[14]
        tracker_dict["latlong"] = res[15]
        all_tracker_info.append(tracker_dict)
    session.close()
    return jsonify(all_tracker_info)
    


if __name__ == "__main__":
    app.run(debug=True)
