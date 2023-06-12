
fetch('data/tracker_info_deb.json')
    .then(response => response.json())
    .then(trace_data => {
        // Use the data to create the Plotly area map
        let countries = trace_data.map(item => item["Country"]);
        let type = trace_data.map(item => item.["Type"]);

        // Create the trace for the area map
        let trace = {
            x: countries,
            y: type,
            type: 'area',
            mode: 'lines',
            fill: 'tozeroy'
        };

        // Define the layout options for the map
        let layout = {
            title: 'Release Years by Country',
            xaxis: { title: 'Country' },
            yaxis: { title: 'Type' }
        };

        // Create an array of traces
        let data = [trace];

        // Render the map using Plotly.newPlot
        Plotly.newPlot('viz', data, layout);
    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });