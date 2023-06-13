fetch('/data/tracker_info.json')
    .then(response => response.json())
    .then(trace_data => {
        // Use the data to create the Plotly histogram
        let company = trace_data.map(item => item.Company);
        let region = trace_data.map(item => item.Region);
        let device_count = trace_data.map(item => item.Device);
        let uniqueCompany = [...new Set(company)];
        console.log(uniqueCompany);
        loadDropdown(uniqueCompany, null); 

        // Create the trace for the histogram
        let trace = {
            x: company,
            y: device_count,
            type: "histogram"
        };

        // Define the layout options for the histogram
        let layout = {
            height: 450,
            // width: 100%,
            // title: "Device Count by Company",
            // xaxis: {
            //     title: "Company"
            // },
            yaxis: {
                title: "Device Count"
            }
        };

        // Create an array of traces
        let data = [trace];

        // Render the histogram using Plotly.newPlot
        Plotly.newPlot("viz1", data, layout);

        // Update the histogram when a region is selected from the dropdown
        let dropdown = document.getElementById("selDataset");
        dropdown.addEventListener("change", function (event) {
            let selectedCompany = event.target.value;
            if (selectedCompany === "All Companies") {
                // Reset to all companies
                Plotly.update("viz1", {
                    x: [company],
                    y: [device_count],
                    type: "histogram"
                });
            } else {
                // Filter data for selected company
                let companyData = trace_data.filter(
                    item => item.Company === selectedCompany
                );
                let deviceCount = companyData.map(item => item.Device);
                Plotly.update("viz1", {
                    x: [companyData.map(item => item.Company)],
                    y: [deviceCount],
                    type: "histogram"
                });
            }
        });
    })
    .catch(error => {
        console.error("Error loading JSON file:", error);
    });

function loadDropdown(uniqueCompany, selectedCompany) {
    var sel = document.getElementById("selDataset");
    sel.innerHTML = "";

    console.log(uniqueCompany)

    // Add "All Companies" option
    var optAll = document.createElement("option");
    optAll.value = "All Companies";
    optAll.text = "All Companies";
    sel.add(optAll);

    // Add options for each company
    uniqueCompany.forEach(function (company1) {
        var opt = document.createElement("option");
        opt.value = company1;
        opt.text = company1;
        sel.add(opt);
    });

    // Set the selected company if provided
    if (selectedCompany) {
        sel.value = selectedCompany;
    }
}


// fetch('data/tracker_info.json')
//     .then(response => response.json())
//     .then(trace_data => {
//         // Use the data to create the Plotly area map
//         let company = trace_data.map(item => item.Company);
//         let country = trace_data.map(item => item.Country);

//         let uniqueCountries = [...new Set(country)];
//             console.log(uniqueCountries)
//         for (let i = 0; i < uniqueCountries.length; i++) {
//             console.log(uniqueCountries[i])
//         }
//         let region = trace_data.map(item => item.Region);
//         let device_count = trace_data.reduce((sum, item) => sum + item.Device, 0);
        
//         // let type = trace_data.reduce((sum, item) => sum + item["Device"]);
//         let dropdown_type = ([[country],[region]])
//         // Create the trace for the area map
//         let trace = {
//             x: company,
//             y: device_count,
//             type: 'histogram',
//             mode: 'none',
//             fill: 'tozeroy'
//         };

//         // Define the layout options for the map
//         let layout = {
//             title: 'Release Years by Country',
//             xaxis: { title: 'Region' },
//             yaxis: { title: 'Device Count' },
//             height: 500,
//             width: 1000

//         };

//         // Create an array of traces
//         let data = [trace];

//         // Render the map using Plotly.newPlot
//         Plotly.newPlot('viz1', data, layout);
//     })
//     .catch(error => {
//         console.error('Error loading JSON file:', error);
//     });

// function loadDropdown(uniqueCountries) {
//     var sel = document.getElementById("selDataset");
//     sel.innerHTML = ""; 

//     uniqueCountries.forEach(function (country) {
//         var opt = document.createElement("option");
//         opt.value = country;
//         opt.text = country; 
//         sel.add(opt);
//     });
// }

// function loadDropdown(uniqueCountries) {
//     sel = document.getElementById("selDataset");
//     uniqueCountries.forEach(function (countries) {
//         opt = document.createElement("option");
//         opt.value = countries;
//         opt.innerHTML = countries;
//         sel.appendChild(opt);
//     });
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

