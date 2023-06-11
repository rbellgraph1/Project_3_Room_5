fetch('data/tracker_info_deb.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Do something with the data.
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

// Initialized arrays
let years = []
let watches = []
let trackers = []

// // For loop to populate arrays
// for (let i = 0; i < searchResults.length; i++) {
//   row = searchResults[i];
//   names.push(row.pair);
//   greekNames.push(row.greekName);
//   romanNames.push(row.romanName);
//   greekSearchResults.push(row.greekSearchResults);
//   romanSearchResults.push(row.romanSearchResults);
// }

(async function () {
  const jsonData = await fetchData();

  jsonData.forEach((item) => {
    years.push(item);
  });

  console.log(years);
})();

// If statement for getting count of Watcher and Tracker data from "Type" in the JSON file.
if ()

// Trace1 for the Watcher Data
let trace1 = {
  x: years,
  y: watches,
  text: years,
  name: "Year",
  type: "bar"
};

// Trace 2 for the Roman Data
let trace2 = {
  x: names,
  y: romanSearchResults,
  text: romanNames,
  name: "Type Count",
  type: "bar"
};

// Create data array
let data = [trace1, trace2];

// Apply a title to the layout
let layout = {
  title: "Greek vs Roman gods search results",
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
Plotly.newPlot("plot", data, layout);