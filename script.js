function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function onLoadFunc(dataCsv)
{
    var timeVal = [];
    var tempVal = [];
    var humVal  = [];

    const lines = dataCsv.split('\n');
	for (const line of lines) {
	    if (line.length) {
	        const [time, temp, hum] = line.split(',').map((element) => element.trim());
	        console.log('time: ' + time + ' - temp: ' + temp + ' - hum: ' + hum);
            timeVal.push(time);
            tempVal.push(temp);
            humVal.push(hum);
        }
	}

    new Chart("tempChart", {
      type: "line",
      data: {
        labels: timeVal,
        datasets: [{
          fill: false,
          borderColor: "red",
          data: tempVal
        }]
      },
      options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 15, max:30}}],
            x: {
                type: 'timeseries',
            }
        }
      }
    });
    
    new Chart("humChart", {
      type: "line",
      data: {
        labels: timeVal,
        datasets: [{
          fill: false,
          borderColor: "blue",
          data: humVal
        }]
      },
      options: {
        legend: {display: false},
        scales: {
            yAxes: [{ticks: {min: 35, max:60}}],
            x: {
                type: 'timeseries',
            }
        }
      }
    });
}
