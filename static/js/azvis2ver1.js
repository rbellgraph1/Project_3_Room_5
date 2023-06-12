fetch('data/tracker_info.json')
  .then(response => response.json())
  .then(trace_data => {
    let releaseYears = trace_data.map(item => item.Releaseyear)
    let watchSum = trace_data.reduce((sum, item) => {
      return sum + (item.Type === "watch" ? 1 : 0);
    }, 0);

    let watch_by_year = [];
    let tracker_by_year = [];

    for (let i = 0; i < trace_data.length; i++) {
      let tracewat = trace_data[i];
      if (tracewat.Type === "watch") {
        watch_by_year.push(tracewat.Releaseyear);
      } else {
        tracker_by_year.push(tracewat.Releaseyear);
      }
    }

    let trace1 = {
      x: watch_by_year,
      name: "Watch",
      type: "histogram",
    };

    let trace2 = {
      x: tracker_by_year,
      name: "Tracker",
      type: "histogram",
    };

    let data = [trace1, trace2];

    let layout = {
      title: 'Amount of Devices released by Year',
      xaxis: { title: 'Release Year' },
      yaxis: { title: 'Number of Devices' },
      height: 500,
      width: 1000
    };

    Plotly.newPlot("viz2", data, layout);
  })
  .catch(err => console.log(err));
