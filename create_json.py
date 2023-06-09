import csv
import json
 
csvfile = open('data/cleaned_tracker_data1.csv', 'r')
jsonfile = open('data/tracker_data.json', 'w')

fieldnames = ("id","company","device","crowdfunded","country","region","release_year","type","accelerometer","gyroscope","magnetometer","barometer","gps","heart_rate")
reader = csv.DictReader(csvfile, fieldnames)
next (reader)
for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write('\n')