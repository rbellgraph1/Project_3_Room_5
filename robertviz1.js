
fetch('data/tracker_info_deb.json')
    .then(response => response.json())
    .then(trace_data => {
        // Use the data to create the Plotly area map
        let company = trace_data.map(item => item.Company);
        let country = trace_data.map(item => item.Country);
        let uniqueCountries = [...new Set(country)];
        console.log(uniqueCountries)
        for (let i = 0; i < uniqueCountries.length; i++) {
            console.log(uniqueCountries[i])
        }
        let region = trace_data.map(item => item.Region);
        let device_count = trace_data.reduce((sum, item) => sum + item.Device, 0);
        
        // let type = trace_data.reduce((sum, item) => sum + item["Device"]);
        let dropdown_type = ([[country],[region]])
        // Create the trace for the area map
        let trace = {
            x: company,
            y: device_count,
            type: 'histogram',
            mode: 'none',
            fill: 'tozeroy'
        };

        // Define the layout options for the map
        let layout = {
            title: 'Release Years by Country',
            xaxis: { title: 'Region' },
            yaxis: { title: 'Device Count' },
            height: 500,
            width: 1000

        };

        // Create an array of traces
        let data = [trace];

        // Render the map using Plotly.newPlot
        Plotly.newPlot('viz1', data, layout);
    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });
// d3.selectAll("#selDataset").on("change", updatePlotly);

// // This function is called when a dropdown menu item is selected
// function updatePlotly() {
//     // Use D3 to select the dropdown menu
//     let dropdownMenu = d3.select("#selDataset");
//     // Assign the value of the dropdown menu option to a variable
//     let dataset = dropdownMenu.property("value");

//     // Initialize x and y arrays
//     let x = [];
//     let y = [];

//     if (dataset === 'dataset1') {
//         x: countries,
//         y: type,
//     }

//     else if (dataset === 'dataset2') {
//         x = region,
//         y = type,
//     }

//     // Note the extra brackets around 'x' and 'y'
//     Plotly.restyle("plot", "x", [x]);
//     Plotly.restyle("plot", "y", [y]);
// }
// init();  
    
    
    
    
// init();
// function optionChanged(id) {
//     createChart(id);
//     loadDemographics(id);
// }

// function loadDropdown(names) {
//     sel = document.getElementById("selDataset");
//     names.forEach(function (name) {
//         opt = document.createElement("option");
//         opt.value = name;
//         opt.innerHTML = name;
//         sel.appendChild(opt);
//     });