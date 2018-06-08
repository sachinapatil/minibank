
google.load("visualization", "1.1", {
	packages : [ "bar" ]
});
google.setOnLoadCallback(drawChart);
function drawChart() {
   	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Date');
      data.addColumn('number', 'Passed');
      data.addColumn('number', 'Failed');
	  
	   $.get('BuildReportsController', function(response) {
	       
	       for(var i in response) {
	    	   var arr = [];
	    	   console.log(response[i].date);
	    	   arr.push(response[i].date);
	    	   arr.push(Number(response[i].passedcount));
	    	   arr.push(Number(response[i].failedcount));
	    	   data.addRows([arr]);
	       }
	       
	   });
	

	var options = {
		chart : {
			title : 'Daily Build Summary',
			subtitle : '',
		},
		width: 600,
		height: 400,
		colors: ['green', 'red'],
		axes: {
            y: {
              0: { side: 'top', label: 'Count'} // Top x-axis.
            }
    }
      
	};

	var chart = new google.charts.Bar(document
			.getElementById('build'));

	chart.draw(data, options);
}
