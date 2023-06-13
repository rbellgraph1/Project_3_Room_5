// Create a map object.
var myMap = L.map("map", {
  center: [15.5994,-28.6731],
  zoom: 3
});

// Add a tile layer.
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 20,
  id: "satellite-streets-v12",
  accessToken: API_KEY
}).addTo(myMap);
// Country data
var countries = [
  {
    Country: "Australia",
    lat: -25.274399,
    latlong: [-25.274399, 133.775131],
    long: 133.775131,
    devices: 1,
    tracker: 1,
    watch: 0
},
{
    Country: "Austria",
    lat: 47.516232,
    latlong: [47.516232, 14.550072],
    long: 14.550072,
    devices: 2,
    tracker: 1,
    watch: 1

},
{
    Country: "Canada",
    lat: 59.619718,
    latlong: [59.619718, -110.281201],
    long: -110.281201,
    devices: 5,
    tracker: 4,
    watch: 1
},
{
    Country: "China",
    lat: 35.86166,
    latlong: [35.86166,104.195396],
    long: 104.195396,
    devices:86,
    tracker: 15,
    watch: 71

},
{
    Country: "Denmark",
    lat: 56.26392,
    latlong: [56.26392, 9.501785],
    long: 9.501785,
    devices: 3,
    tracker: 3,
    watch: 0
},
{
    Country: "England",
    lat: 52.355517999999996,
    latlong: [52.355518, -1.17432],
    long: -1.17432,
    devices: 10,
    tracker: 3,
    watch: 7
},
{
    Country: "Finland",
    lat: 61.92411,
    latlong: [61.92411, 25.748152],
    long: 25.748152,
    devices: 16,
    tracker: 6,
    watch: 10
},
{
    Country: "France",
    lat: 46.227638,
    latlong: [46.227638, 2.213749],
    long: 2.213749,
    devices: 4,
    tracker: 2,
    watch: 2
},
{
    Country: "Germany",
    lat: 51.165691,
    latlong: [51.165691, 10.451526],
    long: 10.451526,
    devices: 14,
    tracker: 12,
    watch: 2
},
{
    Country: "India",
    lat: 22.041597,
    latlong: [22.041597, 79.019626],
    long: 79.019626,
    devices: 7,
    tracker: 4,
    watch: 3
},
{
    Country: "Italy",
    lat: 41.871941,
    latlong: [41.871941, 12.56738],
    long: 12.56738,
    devices: 17,
    tracker: 6,
    watch: 11
},
{
    Country: "Japan",
    lat: 36.204823,
    latlong: [36.204823, 138.25293],
    long: 138.25293,
    devices: 14,
    tracker: 9,
    watch: 5
},
{
    Country: "Netherlands",
    lat: 52.132633,
    latlong: [52.132633, 5.291266],
    long: 5.291266,
    devices: 9,
    tracker: 2,
    watch: 7
},
{
    Country: "Norway",
    lat: 60.472023,
    latlong: [60.472023, 8.468946],
    long: 8.468946,
    devices: 1,
    tracker: 1,
    watch: 0
},
{
    Country: "Poland",
    lat: 51.919437,
    latlong: [51.919437, 19.145136],
    long: 19.145136,
    devices: 4,
    tracker: 4,
    watch: 0

},
{
    Country: "Romania",
    lat: 45.943161,
    latlong: [45.943161, 24.966761],
    long: 24.966761,
    devices: 3,
    tracker: 2,
    watch: 1

},
{
    Country: "Russia",
    lat: 61.52401,
    latlong: [61.52401, 105.318756],
    long: 105.318756,
    devices: 1,
    tracker: 1,
    watch: 0

},
{
    Country: "South Korea",
    lat: 36.228415,
    latlong: [36.228415, 127.753219],
    long: 127.753219,
    devices: 19,
    tracker: 2,
    watch: 17

},
{
    Country: "Switzerland",
    lat: 46.818188,
    latlong: [46.818188, 8.227512],
    long: 8.227512,
    devices: 21,
    tracker: 7,
    watch: 14
},
{
    Country: "Sweden",
    lat: 61.991461,
    latlong: [61.991461, 15.278982],
    long: 15.278982,
    devices: 7,
    tracker: 7,
    watch: 0
},
{
    Country: "Taiwan",
    lat: 23.697809,
    latlong: [23.697809, 120.960518],
    long: 120.960518,
    devices: 13,
    tracker: 5,
    watch: 8
},
{
    Country: "Thailand",
    lat: 15.870032,
    latlong: [15.870032, 100.992538],
    long: 100.992538,
    devices: 1,
    tracker: 1,
    watch: 0
},
{
    Country: "USA",
    lat: 39.092208,
    latlong: [39.092208, -102.600245],
    long: -102.600245,
    devices: 164,
    tracker: 88,
    watch: 76
}     

];

for (var i = 0; i < countries.length; i++) {
  // Set color based on country
  var color;
  switch (countries[i].Country) {
    case "Australia":
      color = "yellow";
      break;
    case "Austria":
      color = "blue";
      break;
    case "Canada":
      color = "green";
      break;
    case "China":
      color = "brown";
      break;
    case "Denmark":
      color = "black";
      break;
    case "England":
      color = "teal";
      break;
    case "Finland":
      color = "darkyellow";
      break;
    case "France":
      color = "orange";
      break;
    case "Germany":
      color = "red";
      break;
    case "India":
      color = "pink";
      break;
    case "Italy":
      color = "beige";
      break;
    case "Japan":
      color = "lightgreen";
      break;
    case "Netherlands":
      color = "darkred";
      break;
    case "Norway":
      color = "skyblue";
      break;
    case "Poland":
      color = "turquoise";
      break;
    case "Romania":
      color = "lemonyellow";
      break;
    case "Russia":
      color = "aqua";
      break;
    case "Germany":
      color = "silver";
      break;
    case "South Korea":
      color = "magenta";
      break;
    case "Sweden":
      color = "yellowgreen";
      break;
    case "Switzerland":
      color = "lightblue";
      break;
    case "Taiwan":
      color = "gold";
      break;
    case "Thailand":
      color = "grey";
      break;
    default:
      color = "violet";
  }

  // Add circles to the map.
L.circle(countries[i].latlong, {
  fillOpacity: 0.75,
  color: "white",
  fillColor: color,
  // Adjust the radius.
  radius: Math.sqrt(countries[i].devices) * 50000
}).bindPopup(`<h1>${countries[i].Country}</h1> <hr> <h3>Devices Total Per Country: ${countries[i].devices}</h3><hr><p>Watches: ${countries[i].watch}</p><hr><p>Trackers: ${countries[i].tracker}</p><hr>`).addTo(myMap);
}
