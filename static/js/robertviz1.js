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

