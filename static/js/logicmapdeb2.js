// Create a map object.
var myMap = L.map("map", {
    center: [15.5994,-28.6731],
    zoom: 3
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // Country data
  var countries = [
      {
          Country: "Australia",
          latlong: [-25.274399, 133.775131],
          devices: 1
      },
      {
          Country: "Austria",
          latlong: [47.516232, 14.550072],
          devices: 2
      },
      {
          Country: "Canada",
          latlong: [59.619718, -110.281201],
          devices: 5
      },
      {
          Country: "China",
          latlong: [35.86166, 104.195396],
          devices: 86
      },
      {
          Country: "Denmark",
          latlong: [56.26392, 9.501785],
          devices: 3
      },
      {
          Country: "England",
          latlong: [52.355518, -1.17432],
          devices: 10
      },
      {
          Country: "Finland",
          latlong: [61.92411, 25.748152],
          devices: 16
      },
      {
          Country: "France",
          latlong: [46.227638, 2.213749],
          devices: 4
      },
      {
          Country: "Germany",
          latlong: [51.165691, 10.451526],
          devices: 14
      },
      {
          Country: "India",
          latlong: [22.041597, 79.019626],
          devices: 7
      },
      {
          Country: "Italy",
          latlong: [41.871941, 12.56738],
          devices: 17
      },
      {
          Country: "Japan",
          latlong: [36.204823, 138.25293],
          devices: 14
      },
      {
          Country: "Netherlands",
          latlong: [52.132633, 5.291266],
          devices: 9
      },
      {
          Country: "Norway",
          latlong: [60.472023, 8.468946],
          devices: 1
      },
      {
          Country: "Poland",
          latlong: [51.919437, 19.145136],
          devices: 4
      },
      {
          Country: "Romania",
          latlong: [45.943161, 24.966761],
          devices: 3
      },
      {
          Country: "Russia",
          latlong: [61.52401, 105.318756],
          devices: 1
      },
      {
          Country: "South Korea",
          latlong: [36.228415, 127.753219],
          devices: 19
      },
      {
          Country: "Switzerland",
          latlong: [46.818188, 8.227512],
          devices: 21
      },
      {
          Country: "Sweden",
          latlong: [61.991461, 15.278982],
          devices: 7
      },
      {
          Country: "Taiwan",
          latlong: [23.697809, 120.960518],
          devices: 13
      },
      {
          Country: "Thailand",
          latlong: [15.870032, 100.992538],
          devices: 1
      },
      {    
          Country: "USA",
          latlong: [39.092208, -102.600245],
          devices: 164
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
    color: "black",
    fillColor: color,
    // Adjust the radius.
    radius: Math.sqrt(countries[i].devices) * 100000
  }).bindPopup(`<h1>${countries[i].Country}</h1> <hr> <h3>Devices Total Per Country: ${countries[i].devices}</h3>`).addTo(myMap);
}
