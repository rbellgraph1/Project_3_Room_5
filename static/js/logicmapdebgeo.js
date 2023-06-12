// Create a map object.
// var myMap = L.map("map", {
//     center: [15.5994,-28.6731],
//     zoom: 3
//   });
  
//   // Add a tile layer.
//   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   }).addTo(myMap);
  
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

const queryDebJson = "data/latlongcountries_wearables.json";

d3.json(queryDebJson).then(function(countries){

    // Send countries.features and countries.features object to the createFeatures function.
      createFeatures(countries.devices);
    });    
  
  function createFeatures(wearableData){
  
      // Create a popup describing the devices for each country
      function onEachFeature(countries, layer){
          layer.bindPopup(`<h1>${countries[i].Country}</h1> <hr> <h3>Devices Total Per Country: ${countries[i].devices}</h3>`).addTo(myMap);
          layer.on({
            // When a user's mouse cursor touches a map feature, the mouseover event calls this function, which makes that feature's opacity change to 90% so that it stands out.
             mouseover: function(event) {
                 layer = event.target;
                 layer.setStyle({
                     fillOpacity: .9
                 });
             },
             // When the cursor no longer hovers over a map feature (that is, when the mouseout event occurs), the feature's opacity reverts back to 50%.
             mouseout: function(event) {
                 layer = event.target;
                 layer.setStyle({
                     fillOpacity: .5
                 });
             },
             // When a feature is clicked, it enlarges to fit the screen.
             click: function(event) {
                 this.openPopup();
     
             }
         });
      }
      
      // Create a GeoJSON layer containing the features array on the earthquakeData object
      function createCircleMarker(countries, latlong){
         let options = {
          radius:mapRadius(countries[i].devices)*500000,
          fillColor: color,
          color: "white",
          weight: 1,
          opacity: 1,
          fillOpacity: 1
         } 
         return L.circleMarker(latlong,options);
      }
      // Create a variable for earthquakes to hold latitude and longitude, 
      // each feature for popup, and circle radius/color/weight/opacity
      let wearables = L.geoJSON(wearableData, {
          onEachFeature: onEachFeature,
          pointToLayer: createCircleMarker
      });
  
      // Send wearable layer to the createMap function
      createMap(wearables);
  }



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
 
  // Create map legend 
// let legend = L.control({position: 'bottomright'});

// legend.onAdd = function() {
//     let div = L.DomUtil.create('div', 'info legend');
//     let labels = [];
//     let legendInfo = "<h4>Countries</h4>";

//     div.innerHTML = legendInfo

    // created a for loop to go through each magnitude item to label and color
    // the legend.  Push to labels array as list item
//     for (let i = 0; i < countries.length; i++) {
//           labels.push('<ul style="background-color:' + (countries[i] + 1) + '"> <span>' + countries[i] + (countries[i + 1] ? '&ndash;' + countries[i + 1] + '' : '+') + '</span></ul>');
//         }

//       // add each label list item to the div under the <ul> tag
//       div.innerHTML += "<ul>" + labels.join("") + "</ul>";
    
//     return div;
//   };


// Create map
function createMap(wearables) {
   // Define outdoors and graymap layers
   let streetstylemap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 20,
    id: "outdoors-v11",
    // using the API_KEY in config.sys for mapbox.com
    accessToken: API_KEY
  })

  let graymap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 20,
    id: "light-v10",
    accessToken: API_KEY
  })

  // Define satellite layer
  let satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 20,
    id: "satellite-streets-v12",
    accessToken: API_KEY
  });

  // Define a baseMaps object to hold the base layers
  let baseMaps = {
    "Outdoors": streetstylemap,
    "Grayscale": graymap,
    "Satellite" : satellite
  };

  // Create overlay object to hold the overlay layer
  let overlayMaps = {
    Wearables: wearables
  };

  // Create the map, giving it the streetmap, earthquakes, and satellite layers to display on load
  let myMap = L.map("map", {
    center: [
      39.8282, -98.5795
    ],
    zoom: 4,
    layers: [streetstylemap, wearables, satellite]
  });

  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
//   legend.addTo(myMap);
}

    // Add circles to the map.
//   L.circle(countries[i].latlong, {
//     fillOpacity: 0.75,
//     color: "black",
//     fillColor: color,
//     // Adjust the radius.
//     radius: Math.sqrt(countries[i].devices) * 100000
//   }).bindPopup(`<h1>${countries[i].Country}</h1> <hr> <h3>Devices Total Per Country: ${countries[i].devices}</h3>`).addTo(myMap);
}
