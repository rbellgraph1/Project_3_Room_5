fetch('data/tracker_info_deb.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

let releaseYears = data.map(item => item["Releaseyear"])
let types = data.map(item => item["Type"])

let watchtotal = data.reduce((sum, item) => sum + item("Type" == "watch"), 0)

let trackertotal = data.reduce((sum, item) => sum + item("Type" == "tracker"), 0)

let trace1 = {
    x: releaseYears,
    y: watchtotal,
    name: "Watch",
    type: "bar"
  };
  
  // Trace 2 for the Roman Data
  let trace2 = {
    x: releaseYears,
    y: trackertotal,
    name: "test",
    type: "bar"
  };
  
  // Create data array
  let data = [trace1, trace2];
  
  // Apply a title to the layout
  let layout = {
    title: "Test",
    barmode: "group",
    // Include margins in the layout so the x-tick labels display correctly
    margin: {
      l: 50,
      r: 50,
      b: 200,
      t: 50,
      pad: 4
    }
  };
  
  // Render the plot to the div tag with id "plot"
  Plotly.newPlot("viz2_container", data, layout);
